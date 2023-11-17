<?php

namespace App\Services;

use App\Http\Requests\RequestAppointmentRequest;
use App\Models\RequestAppointment;
use App\Services\Interfaces\RequestAppointmentServiceInterface;

class RequestAppointmentService implements RequestAppointmentServiceInterface
{
    private RequestAppointment $requestAppointment;
    public function __construct(RequestAppointment $requestAppointment)
    {
        $this->requestAppointment = $requestAppointment;
    }

    public function store(RequestAppointmentRequest $request)
    {
        $this->requestAppointment->doctor_id = $request->doctor_id;
        $this->requestAppointment->user_id = $request->user_id;
        $this->requestAppointment->patient_id = $request->patient_id;
        $this->requestAppointment->disease_id = $request->disease_id;
        $this->requestAppointment->save();
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
}
