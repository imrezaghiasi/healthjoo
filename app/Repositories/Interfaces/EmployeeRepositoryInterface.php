<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface EmployeeRepositoryInterface
{
    public function getWithTrashedLatest(Request $request);
    public function getJobForEmployees();
}
