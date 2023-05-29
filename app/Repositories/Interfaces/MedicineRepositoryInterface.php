<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface MedicineRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);
}
