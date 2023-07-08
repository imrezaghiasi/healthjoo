<?php

namespace App\Services\Interfaces;

use App\Http\Requests\HospitalizationRequest;
use App\Models\Hospitalization;

interface HospitalizationServiceInterface
{
    public function store(HospitalizationRequest $request);
    public function update(HospitalizationRequest $request, Hospitalization $hospitalization);
    public function destroy(string $id);
    public function restore(string $id);
}
