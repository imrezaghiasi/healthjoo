<?php

namespace App\Services;

use App\Http\Requests\PatientRequest;
use App\Models\Patient;
use App\Services\Interfaces\ImageUploaderServiceInterface;
use App\Services\Interfaces\PatientServiceInterface;

class PatientService implements PatientServiceInterface
{
    private Patient $patient;
    private ImageUploaderServiceInterface $imageUploaderService;
    public function __construct(Patient $patient,Interfaces\ImageUploaderServiceInterface $imageUploaderService)
    {
        $this->patient = $patient;
        $this->imageUploaderService = $imageUploaderService;
    }

    public function store(PatientRequest $request)
    {
        $this->patient->first_name = $request->first_name;
        $this->patient->last_name = $request->last_name;
        $this->patient->gender = $request->gender;
        $this->patient->mobile = $request->mobile;
        $this->patient->blood_group = $request->blood_group;
        $this->patient->address = $request->address;
        $this->patient->national_code = $request->national_code;
        $this->patient->date_of_birth = $request->date_of_birth;
        if ($request->file('photo')) {
            $this->patient->photo_path = $this->imageUploaderService->storeImage($request->file('photo'), 'patientsPhoto');
        }
        $this->patient->save();
    }

    public function update(PatientRequest $request, Patient $patient)
    {
        $patient->first_name = $request->first_name;
        $patient->last_name = $request->last_name;
        $patient->gender = $request->gender;
        $patient->mobile = $request->mobile;
        $patient->blood_group = $request->blood_group;
        $patient->address = $request->address;
        $patient->national_code = $request->national_code;
        $patient->date_of_birth = $request->date_of_birth;

        if ($request->file('photo')) {
            $this->imageUploaderService->updateImage($request->file('photo'), $patient,'patientsPhoto');
        }elseif ($request->userRemoveImage){
            $patient->photo_path =null;
        }

        $patient->update();

    }

    public function destroy(string $id)
    {
        $patient = $this->patient->FindOrFail($id);
        $patient->delete();
    }

    public function restore(string $id)
    {
        $patient = $this->patient->withTrashed()->FindOrFail($id);
        $patient->restore();
    }
}
