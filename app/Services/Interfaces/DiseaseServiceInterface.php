<?php

namespace App\Services\Interfaces;



use App\Http\Requests\DiseaseRequest;
use App\Models\Disease;

interface DiseaseServiceInterface
{
    public function store(DiseaseRequest $request);
    public function update(DiseaseRequest $request, Disease $disease);
    public function destroy(Disease $disease);
    public function restore(string $id);
}
