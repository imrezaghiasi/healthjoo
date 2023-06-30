<?php

namespace App\Repositories;

use App\Models\Department;
use App\Repositories\Interfaces\DepartmentRepositoryInterface;
use Illuminate\Http\Request;

class DepartmentRepository implements DepartmentRepositoryInterface
{
    public function query()
    {
        return Department::query();
    }

    public function getWithTrashedLatest(Request $request)
    {
        return $this->query()->where('name','like','%'.$request->term.'%')->withTrashed()->latest();
    }
}
