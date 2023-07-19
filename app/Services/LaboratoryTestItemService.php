<?php

namespace App\Services;

use App\Http\Requests\LaboratoryTestItemRequest;
use App\Models\LaboratoryTestItem;
use App\Services\Interfaces\LaboratoryTestItemServiceInterface;

class LaboratoryTestItemService implements LaboratoryTestItemServiceInterface
{
    private LaboratoryTestItem $laboratoryTestItem;

    public function __construct(\App\Models\LaboratoryTestItem $laboratoryTestItem)
    {
        $this->laboratoryTestItem = $laboratoryTestItem;
    }

    public function store(LaboratoryTestItemRequest $request)
    {
        return $this->laboratoryTestItem->create([
            'test_id' => $request->test_id,
            'laboratory_test_id' => $request->laboratory_test_id,
            'result' => $request->result
        ]);
    }

    public function update(LaboratoryTestItemRequest $request, LaboratoryTestItem $laboratoryTestItem)
    {
        $laboratoryTestItem->test_id = $request->test_id;
        $laboratoryTestItem->laboratory_test_id = $request->laboratory_test_id;
        $laboratoryTestItem->result = $request->result;
        $laboratoryTestItem->update();
    }

    public function destroy(LaboratoryTestItem $laboratoryTestItem)
    {
        $laboratoryTestItem->delete();
    }

    public function restore(string $id)
    {
        $laboratoryTestItem = $this->laboratoryTestItem->withTrashed()->FindOrFail($id);
        $laboratoryTestItem->restore();
    }
}
