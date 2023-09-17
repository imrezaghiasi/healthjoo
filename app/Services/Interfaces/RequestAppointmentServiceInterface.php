<?php

namespace App\Services\Interfaces;

use App\Http\Requests\RequestAppointmentRequest;
use App\Models\RequestAppointment;

interface RequestAppointmentServiceInterface
{
    public function store(RequestAppointmentRequest $request);
    public function update(RequestAppointmentRequest $request, RequestAppointment $requestAppointment);
    public function destroy(RequestAppointment $requestAppointment);
    public function restore(string $id);
}
