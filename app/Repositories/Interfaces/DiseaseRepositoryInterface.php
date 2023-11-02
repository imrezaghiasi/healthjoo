<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface DiseaseRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);
}
