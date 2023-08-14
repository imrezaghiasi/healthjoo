<?php

namespace App\Services;

use App\Http\Requests\PharmacyOperationRequest;
use App\Http\Requests\PharmacyRequest;
use App\Models\Pharmacy;
use App\Models\PharmacyOperation;
use App\Services\Interfaces\PharmacyServiceInterface;

class PharmacyService implements PharmacyServiceInterface
{
    private Pharmacy $pharmacy;
    private PharmacyOperation $pharmacyOperation;
    public function __construct(Pharmacy $pharmacy, PharmacyOperation $pharmacyOperation)
    {
        $this->pharmacy = $pharmacy;
        $this->pharmacyOperation = $pharmacyOperation;
    }

    public function store(PharmacyRequest $request)
    {
        return $this->pharmacy->create([
            'medicine_id' => $request->medicine_id,
            'quantity' => $request->quantity ?? 0,
            'in_stock' => $request->in_stock ?? 0,
        ]);
    }

    public function update(PharmacyRequest $request, Pharmacy $pharmacy)
    {
        $pharmacy->medicine_id = $request->medicine_id;
        $pharmacy->quantity = $request->quantity;
        $pharmacy->in_stock = $request->in_stock;
        $pharmacy->update();
    }

    public function destroy(Pharmacy $pharmacy)
    {
        $pharmacy->delete();
    }

    public function restore(string $id)
    {
        $pharmacy = $this->pharmacy->withTrashed()->FindOrFail($id);
        $pharmacy->restore();
    }

    public function store_increase(PharmacyOperationRequest $request, Pharmacy $pharmacy)
    {
        if ($request->count > 0) {
            $this->pharmacyOperation->create([
                'pharmacy_id' => $request->pharmacy_id,
                'operation' => 1,
                'count' => $request->count,
                'description' => $request->description
            ]);
            $pharmacy->quantity += $request->count;
            $pharmacy->in_stock = 1;
        }
        $pharmacy->update();
    }

    public function store_reduce(PharmacyOperationRequest $request, Pharmacy $pharmacy)
    {
        if ($request->count > 0 && $pharmacy->quantity > 0) {
            $this->pharmacyOperation->create([
                'pharmacy_id' => $request->pharmacy_id,
                'operation' => 0,
                'count' => $request->count,
                'description' => $request->description
            ]);
            $pharmacy->quantity -= $request->count;
            if ($pharmacy->quantity <= 0) {
                $pharmacy->quantity = 0;
                $pharmacy->in_stock = 0;
            }
        }
        $pharmacy->update();
    }
}
