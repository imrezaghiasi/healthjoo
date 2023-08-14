<?php

namespace App\Services\Interfaces;

use App\Http\Requests\PharmacyOperationRequest;
use App\Http\Requests\PharmacyRequest;
use App\Models\Pharmacy;
use App\Models\PharmacyOperation;

interface PharmacyServiceInterface
{
    public function store(PharmacyRequest $request);
    public function update(PharmacyRequest $request, Pharmacy $pharmacy);
    public function destroy(Pharmacy $pharmacy);
    public function restore(string $id);
    public function store_increase(PharmacyOperationRequest $request,Pharmacy $pharmacy);
    public function store_reduce(PharmacyOperationRequest $request,Pharmacy $pharmacy);
}
