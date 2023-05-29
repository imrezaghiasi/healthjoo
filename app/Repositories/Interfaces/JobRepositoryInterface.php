<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface JobRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);
}
