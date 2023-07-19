<?php

namespace App\Services\Interfaces;

use App\Http\Requests\LaboratoryTestRequest;
use App\Models\LaboratoryTest;
use Illuminate\Http\Request;

interface LaboratoryTestServiceInterface
{
    public function store(LaboratoryTestRequest $request);
    public function update(LaboratoryTestRequest $request, LaboratoryTest $laboratoryTest);
    public function destroy(LaboratoryTest $laboratoryTest);
    public function restore(string $id);
    public function store_laboratory_test_results(Request $request);
}
