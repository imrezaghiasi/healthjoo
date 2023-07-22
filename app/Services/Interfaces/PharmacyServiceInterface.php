<?php

namespace App\Services\Interfaces;

use App\Http\Requests\PharmacyRequest;
use App\Models\Pharmacy;

interface PharmacyServiceInterface
{
    public function store(PharmacyRequest $request);
    public function update(PharmacyRequest $request, Pharmacy $pharmacy);
    public function destroy(Pharmacy $pharmacy);
    public function restore(string $id);
}
