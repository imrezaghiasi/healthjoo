<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface OrderRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);
    public function getPatientForOrder();
    public function getMedicineForOrder();
}
