<?php

namespace App\Services;

use App\Http\Requests\MedicineRequest;
use App\Models\Medicine;
use App\Services\Interfaces\MedicineServiceInterface;

class MedicineService implements MedicineServiceInterface
{
    private Medicine $medicine;
    public function __construct(Medicine $medicine)
    {
        $this->medicine = $medicine;
    }

    public function store(MedicineRequest $request)
    {
        return $this->medicine->create([
            'title' => $request->title,
            'price' => $request->price,
            'code' => $request->code
        ]);
    }

    public function update(MedicineRequest $request, Medicine $medicine)
    {
        $medicine->title = $request->title;
        $medicine->price = $request->price;
        $medicine->code = $request->code;
        $medicine->update();
    }

    public function destroy(string $id)
    {
        $medicine = $this->medicine->FindOrFail($id);
        $medicine->delete();
    }

    public function restore(string $id)
    {
        $medicine = $this->medicine->withTrashed()->FindOrFail($id);
        $medicine->restore();
    }
}
