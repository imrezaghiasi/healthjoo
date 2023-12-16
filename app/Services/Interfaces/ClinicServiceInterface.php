<?php

namespace App\Services\Interfaces;

use App\Http\Requests\ClinicRequest;
use App\Models\Clinic;

interface ClinicServiceInterface
{
    public function store(ClinicRequest $request);
    public function update(ClinicRequest $request, Clinic $clinic);
    public function destroy(Clinic $clinic);
    public function restore(string $id);
}
