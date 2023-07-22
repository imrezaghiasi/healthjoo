<?php

namespace App\Services\Interfaces;

use App\Http\Requests\PharmacyOperationRequest;
use App\Models\PharmacyOperation;

interface PharmacyOperationServiceInterface
{
    public function store(PharmacyOperationRequest $request);
    public function update(PharmacyOperationRequest $request, PharmacyOperation $pharmacyOperation);
    public function destroy(PharmacyOperation $pharmacyOperation);
    public function restore(string $id);
}
