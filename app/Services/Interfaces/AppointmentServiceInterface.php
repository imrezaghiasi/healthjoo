<?php

namespace App\Services\Interfaces;

use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;

interface AppointmentServiceInterface
{
    public function store(AppointmentRequest $request);
    public function update(AppointmentRequest $request, Appointment $appointment);
    public function destroy(Appointment $appointment);
    public function restore(string $id);
}
