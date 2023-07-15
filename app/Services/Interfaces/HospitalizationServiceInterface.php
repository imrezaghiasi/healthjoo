<?php

namespace App\Services\Interfaces;

use App\Http\Requests\HospitalizationRequest;
use App\Models\Hospitalization;

interface HospitalizationServiceInterface
{
    public function store(HospitalizationRequest $request);

    public function update(HospitalizationRequest $request, Hospitalization $hospitalization);

    public function destroy(Hospitalization $hospitalization);

    public function restore(string $id);

    public function update_finished_at(HospitalizationRequest $request, Hospitalization $hospitalization);
}
