<?php

namespace App\Repositories\Interfaces;

use App\Models\Pharmacy;
use Illuminate\Http\Request;

interface PharmacyRepositoryInterface
{
    public function getWithTrashedLatest(Request $request = null);
    public function getMedicineForPharmacy();
    public function get_operation(Pharmacy $pharmacy);
}
