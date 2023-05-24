<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface DoctorRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);
}
