<?php

namespace App\Services;

use App\Http\Requests\PharmacyRequest;
use App\Models\Pharmacy;
use App\Services\Interfaces\PharmacyServiceInterface;

class PharmacyService implements PharmacyServiceInterface
{
    private Pharmacy $pharmacy;
    public function __construct(Pharmacy $pharmacy)
    {
        $this->pharmacy = $pharmacy;
    }

    public function store(PharmacyRequest $request)
    {
        return $this->pharmacy->create([
            'medicine_id' => $request->medicine_id,
            'quantity' => $request->quantity,
            'in_stock' => $request->in_stock,
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
}
