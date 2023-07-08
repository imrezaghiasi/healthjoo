<?php

namespace App\Services;

use App\Http\Requests\HospitalizationRequest;
use App\Models\Hospitalization;
use App\Services\Interfaces\HospitalizationServiceInterface;

class HospitalizationService implements HospitalizationServiceInterface
{
    private Hospitalization $hospitalization;

    public function __construct(Hospitalization $hospitalization)
    {
        $this->hospitalization = $hospitalization;
    }

    public function store(HospitalizationRequest $request)
    {
        $this->hospitalization->patient_id = $request->patient_id;
        $this->hospitalization->room_id = $request->room_id;
        $this->hospitalization->doctor_id = $request->doctor_id;
        $this->hospitalization->disease = $request->disease;
        $this->hospitalization->date_of_hospitalization = $request->date_of_hospitalization;
        $this->hospitalization->start_time = $request->start_time;
        $this->hospitalization->end_time = $request->end_time;

        $this->hospitalization->save();
    }

    public function update(HospitalizationRequest $request, Hospitalization $hospitalization)
    {
        $hospitalization->patient_id = $request->patient_id;
        $hospitalization->room_id = $request->room_id;
        $hospitalization->doctor_id = $request->doctor_id;
        $hospitalization->disease = $request->disease;
        $hospitalization->date_of_hospitalization = $request->date_of_hospitalization;
        $hospitalization->start_time = $request->start_time;
        $hospitalization->end_time = $request->end_time;

        $hospitalization->update();
    }

    public function destroy(string $id)
    {
        $hospitalization = $this->hospitalization->FindOrFail($id);
        $hospitalization->delete();
    }

    public function restore(string $id)
    {
        $hospitalization = $this->hospitalization->withTrashed()->FindOrFail($id);
        $hospitalization->restore();
    }
}
