<?php

namespace App\Services\Interfaces;

use App\Http\Requests\PatientRequest;
use App\Models\Patient;

interface PatientServiceInterface
{
    public function store(PatientRequest $request);
    public function update(PatientRequest $request, Patient $patient);
    public function destroy(string $id);
    public function restore(string $id);
}
