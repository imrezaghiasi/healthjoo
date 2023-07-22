<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface PharmacyOperationRepositoryInterface
{
    public function getWithTrashedLatest(Request $request = null);
}
