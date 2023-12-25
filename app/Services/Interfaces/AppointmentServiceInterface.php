<?php

namespace App\Services\Interfaces;

use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;
use App\Models\Clinic;
use Illuminate\Http\Request;

interface AppointmentServiceInterface
{
    public function store(AppointmentRequest $request);
    public function update(AppointmentRequest $request, Appointment $appointment);
    public function destroy(Appointment $appointment);
    public function restore(string $id);
    public function storeCumulativeAppointment(Request $request, Clinic $clinic);
}
