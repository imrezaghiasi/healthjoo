<?php

namespace App\Services;

use App\Http\Requests\RequestAppointmentRequest;
use App\Models\Appointment;
use App\Models\RequestAppointment;
use App\Services\Interfaces\RequestAppointmentServiceInterface;
use Carbon\Carbon;

class RequestAppointmentService implements RequestAppointmentServiceInterface
{
    private RequestAppointment $requestAppointment;
    public function __construct(RequestAppointment $requestAppointment)
    {
        $this->requestAppointment = $requestAppointment;
    }

    public function store(RequestAppointmentRequest $request)
    {
        $appointment = Appointment::where('started_at', Carbon::parse("$request->date_started_at $request->time_started_at"))->first();
        $requestAppointment = RequestAppointment::withWhereHas('appointment', function ($query) use ($appointment) {
            $query->where('clinic_id','!=',$appointment->clinic_id);
        })->where([['user_id',$request->user_id] , ['appointment_id',$appointment->id]]);
        if ($requestAppointment->exists())
            return back()->with('failed', 'قبلا در این زمان نوبت برای شما رزرو شده است');
        $requestAppointment = RequestAppointment::create(
            [
                'user_id' => $request->user_id,
                'patient_id' => $request->patient_id,
                'appointment_id' => $appointment->id,
                'disease_id' => $request->disease_id
            ]
        );
        $requestAppointment->appointment->is_reserved = 1;
        $requestAppointment->appointment->save();
        return back()->with('success', 'نوبت شما با موفقیت رزرو شد');
    }

    public function update(RequestAppointmentRequest $request, RequestAppointment $requestAppointment)
    {
        $requestAppointment->doctor_id = $request->doctor_id;
        $requestAppointment->user_id = $request->user_id;
        $requestAppointment->patient_id = $request->patient_id;
        $requestAppointment->disease_id = $request->disease_id;
        $requestAppointment->update();
    }

    public function destroy(RequestAppointment $requestAppointment)
    {
        $requestAppointment->delete();
    }

    public function restore(string $id)
    {
        $requestAppointment = $this->requestAppointment->withTrashed()->FindOrFail($id);
        $requestAppointment->restore();
    }

    public function confirmRequestAppointment(RequestAppointment $requestAppointment)
    {
        $requestAppointment->is_referred = 1;
        $appointment = Appointment::where('id',$requestAppointment->appointment_id)->first();
        $appointment->is_expired = 1;
        $appointment->save();
        $requestAppointment->save();
    }

    public function cancelRequestAppointment(RequestAppointment $requestAppointment)
    {
        $requestAppointment->is_canceled = 1;
        $appointment = Appointment::where('id',$requestAppointment->appointment_id)->first();
        $appointment->is_reserved = 0;
        $appointment->save();
        $requestAppointment->save();
    }
}
