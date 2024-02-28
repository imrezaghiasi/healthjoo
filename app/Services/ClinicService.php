<?php

namespace App\Services;

use App\Http\Requests\ClinicRequest;
use App\Models\Appointment;
use App\Models\Clinic;
use App\Services\Interfaces\ClinicServiceInterface;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ClinicService implements ClinicServiceInterface
{
    private Clinic $clinic;

    public function __construct(Clinic $clinic)
    {
        $this->clinic = $clinic;
    }


    public function store(ClinicRequest $request)
    {
        $this->clinic->doctor_id = $request->doctor_id;
        $this->clinic->address = $request->address;
        $this->clinic->phone = $request->phone;
        $this->clinic->start_day = $request->start_day;
        $this->clinic->end_day = $request->end_day;
        $this->clinic->start_hours = $request->start_hours;
        $this->clinic->end_hours = $request->end_hours;
        $this->clinic->save();
    }

    public function update(ClinicRequest $request, Clinic $clinic)
    {
        $clinic->doctor_id = $request->doctor_id;
        $clinic->address = $request->address;
        $clinic->phone = $request->phone;
        $clinic->start_day = $request->start_day;
        $clinic->end_day = $request->end_day;
        $clinic->start_hours = $request->start_hours;
        $clinic->end_hours = $request->end_hours;
        $clinic->update();
    }

    public function destroy(Clinic $clinic)
    {
        $clinic->delete();
    }

    public function restore(string $id)
    {
        $clinic = $this->clinic->withTrashed()->FindOrFail($id);
        $clinic->restore();
    }

    public function storeMultiAppointmentForClinic(Request $request, Clinic $clinic)
    {
        $now = Carbon::now();
        $formattedNow = $now->format('Y-m-d H:i');
        $end_time = Carbon::parse("$request->end_date  $clinic->end_hours");
        while ($end_time->greaterThanOrEqualTo($formattedNow)) {
            $dayOfWeek = (Carbon::parse($formattedNow)->dayOfWeek + 2) % 7;
            if (($dayOfWeek >= $clinic->start_day) && ($dayOfWeek <= $clinic->end_day)) {
                $str_hrs = $clinic->start_hours;
                while ($str_hrs < $clinic->end_hours) {
                    $appointment = new Appointment();
                    $appointment->clinic_id = $clinic->id;
                    $date_string = Carbon::parse($formattedNow)->toDateString();
                    $appointment->started_at = Carbon::parse("$date_string $str_hrs");
                    $appointment->save();
                    $str_hrs = Carbon::parse($str_hrs);
                    $str_hrs = $str_hrs->addMinutes((int)$request->time_interval)->format('H:i');
                }
            }
            $formattedNow = Carbon::parse($formattedNow);
            $formattedNow->addDay(1)->format('Y-m-d H:i');
        }

    }
}
