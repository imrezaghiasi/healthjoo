<?php

namespace App\Services;

use App\Http\Requests\ClinicRequest;
use App\Models\Clinic;
use App\Services\Interfaces\ClinicServiceInterface;

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
}
