<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface PharmacyRepositoryInterface
{
    public function getWithTrashedLatest(Request $request = null);
}
