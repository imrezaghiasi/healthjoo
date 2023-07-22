<?php

namespace App\Services;

use App\Http\Requests\PharmacyOperationRequest;
use App\Models\PharmacyOperation;
use App\Services\Interfaces\PharmacyOperationServiceInterface;

class PharmacyOperationService implements PharmacyOperationServiceInterface
{
    private PharmacyOperation $pharmacyOperation;
    public function __construct(PharmacyOperation $pharmacyOperation)
    {
        $this->pharmacyOperation = $pharmacyOperation;
    }

    public function store(PharmacyOperationRequest $request)
    {
        return $this->pharmacyOperation->create([
            'pharmacy_id' => $request->pharmacy_id,
            'order_id' => $request->order_id,
            'operation' => $request->operation,
            'count' => $request->count,
            'description' => $request->description,
        ]);
    }

    public function update(PharmacyOperationRequest $request, PharmacyOperation $pharmacyOperation)
    {
        $pharmacyOperation->pharmacy_id = $request->pharmacy_id;
        $pharmacyOperation->order_id = $request->order_id;
        $pharmacyOperation->operation = $request->operation;
        $pharmacyOperation->count = $request->count;
        $pharmacyOperation->description = $request->description;
        $pharmacyOperation->update();
    }

    public function destroy(PharmacyOperation $pharmacyOperation)
    {
        $pharmacyOperation->delete();
    }

    public function restore(string $id)
    {
        $pharmacyOperation = $this->pharmacyOperation->withTrashed()->FindOrFail($id);
        $pharmacyOperation->restore();
    }
}
