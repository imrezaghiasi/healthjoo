<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface DepartmentRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);
}
