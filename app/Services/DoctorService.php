<?php

namespace App\Services;

use App\Http\Requests\DoctorRequest;
use App\Models\Doctor;
use App\Services\Interfaces\DoctorServiceInterface;
use App\Services\Interfaces\ImageUploaderServiceInterface;

class DoctorService implements DoctorServiceInterface
{
    private Doctor $doctor;
    private ImageUploaderServiceInterface $imageUploaderService;

    public function __construct(Doctor $doctor, Interfaces\ImageUploaderServiceInterface $imageUploaderService)
    {
        $this->doctor = $doctor;
        $this->imageUploaderService = $imageUploaderService;
    }

    public function store(DoctorRequest $request)
    {
        $this->doctor->first_name = $request->first_name;
        $this->doctor->last_name = $request->last_name;
        $this->doctor->national_code = $request->national_code;
        $this->doctor->date_of_birth = $request->date_of_birth;
        $this->doctor->gender = $request->gender;
        $this->doctor->email = $request->email;
        $this->doctor->mobile = $request->mobile;
        $this->doctor->address = $request->address;
        $this->doctor->specialization = $request->specialization;
        if ($request->file('photo')) {
            $this->doctor->photo_path = $this->imageUploaderService->storeImage($request->file('photo'), 'doctorsPhoto');
        }
        $this->doctor->save();
    }

    public function update(DoctorRequest $request, Doctor $doctor)
    {
        $doctor->first_name = $request->first_name;
        $doctor->last_name = $request->last_name;
        $doctor->national_code = $request->national_code;
        $doctor->date_of_birth = $request->date_of_birth;
        $doctor->gender = $request->gender;
        $doctor->email = $request->email;
        $doctor->mobile = $request->mobile;
        $doctor->address = $request->address;
        $doctor->specialization = $request->specialization;

        if ($request->file('photo')) {
            $this->imageUploaderService->updateImage($request->file('photo'), $doctor,'doctorsPhoto');
        }elseif ($request->userRemoveImage){
            $doctor->photo_path =null;
        }

        $doctor->update();

    }

    public function destroy(string $id)
    {
        $doctor = $this->doctor->FindOrFail($id);
        $doctor->delete();
    }

    public function restore(string $id)
    {
        $doctor = $this->doctor->withTrashed()->FindOrFail($id);
        $doctor->restore();
    }
}
