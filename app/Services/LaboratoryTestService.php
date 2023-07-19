<?php

namespace App\Services;

use App\Http\Requests\LaboratoryTestRequest;
use App\Models\LaboratoryTest;
use App\Models\LaboratoryTestItem;
use App\Services\Interfaces\LaboratoryTestServiceInterface;
use Illuminate\Http\Request;

class LaboratoryTestService implements LaboratoryTestServiceInterface
{
    private LaboratoryTest $laboratoryTest;
    public function __construct(LaboratoryTest $laboratoryTest)
    {
        $this->laboratoryTest = $laboratoryTest;
    }

    public function store(LaboratoryTestRequest $request)
    {
        return $this->laboratoryTest->create([
            'patient_id' => $request->patient_id,
            'test_type' => $request->test_type,
            'price' => $request->price
        ]);
    }

    public function update(LaboratoryTestRequest $request, LaboratoryTest $laboratoryTest)
    {
        $laboratoryTest->patient_id = $request->patient_id;
        $laboratoryTest->test_type = $request->test_type;
        $laboratoryTest->price = $request->price;
        $laboratoryTest->update();
    }

    public function destroy(LaboratoryTest $laboratoryTest)
    {
        $laboratoryTest->delete();
    }

    public function restore(string $id)
    {
        $laboratoryTest = $this->laboratoryTest->withTrashed()->FindOrFail($id);
        $laboratoryTest->restore();
    }

    public function store_laboratory_test_results(Request $request)
    {
        foreach ($request->results as $result) {
            $laboratoryTestItem = new LaboratoryTestItem();
            $laboratoryTestItem->laboratory_test_id = $request->laboratory_test_id;
            $laboratoryTestItem->test_id = $result['test_id'];
            $laboratoryTestItem->result = $result['result'];
            $laboratoryTestItem->save();
        }
    }
}
