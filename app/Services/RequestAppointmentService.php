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
        $this->requestAppointment->disease = $request->disease;
        $this->requestAppointment->save();
    }

    public function update(RequestAppointmentRequest $request, RequestAppointment $requestAppointment)
    {
        $requestAppointment->doctor_id = $request->doctor_id;
        $requestAppointment->user_id = $request->user_id;
        $requestAppointment->disease = $request->disease;
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
