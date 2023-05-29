<?php

namespace App\Services\Interfaces;

use App\Http\Requests\MedicineRequest;
use App\Models\Medicine;

interface MedicineServiceInterface
{
    public function store(MedicineRequest $request);
    public function update(MedicineRequest $request, Medicine $medicine);
    public function destroy(string $id);
    public function restore(string $id);
}
