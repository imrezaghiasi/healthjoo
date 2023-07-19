<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface TestRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);
}
