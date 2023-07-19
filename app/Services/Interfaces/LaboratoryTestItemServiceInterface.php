<?php

namespace App\Services\Interfaces;

use App\Http\Requests\LaboratoryTestItemRequest;
use App\Models\LaboratoryTestItem;

interface LaboratoryTestItemServiceInterface
{
    public function store(LaboratoryTestItemRequest $request);
    public function update(LaboratoryTestItemRequest $request, LaboratoryTestItem $laboratoryTestItem);
    public function destroy(LaboratoryTestItem $laboratoryTestItem);
    public function restore(string $id);
}
