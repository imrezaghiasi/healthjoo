<?php

namespace App\Services;

use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;
use App\Services\Interfaces\AppointmentServiceInterface;
use Carbon\Carbon;

class AppointmentService implements AppointmentServiceInterface
{
    private Appointment $appointment;
    public function __construct(Appointment $appointment)
    {
        $this->appointment = $appointment;
    }


    public function store(AppointmentRequest $request)
    {
        $this->appointment->clinic_id = $request->clinic_id;
        $this->appointment->started_at = Carbon::parse("$request->date_started_at $request->time_started_at");
        $this->appointment->save();
    }

    public function update(AppointmentRequest $request, Appointment $appointment)
    {
        $appointment->clinic_id = $request->clinic_id;
        $appointment->started_at = Carbon::parse("$request->date_started_at $request->time_started_at");
        $appointment->update();
    }

    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
    }

    public function restore(string $id)
    {
        $appointment = $this->appointment->withTrashed()->FindOrFail($id);
        $appointment->restore();
    }
}
