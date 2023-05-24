<?php

namespace App\Services\Interfaces;

use App\Http\Requests\DoctorRequest;
use App\Models\Doctor;

interface DoctorServiceInterface
{
    public function store(DoctorRequest $request);
    public function update(DoctorRequest $request, Doctor $patient);
    public function destroy(string $id);
    public function restore(string $id);
}
