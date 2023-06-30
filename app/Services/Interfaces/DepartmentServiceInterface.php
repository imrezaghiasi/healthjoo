<?php

namespace App\Services\Interfaces;

use App\Http\Requests\DepartmentRequest;
use App\Models\Department;

interface DepartmentServiceInterface
{
    public function store(DepartmentRequest $request);
    public function update(DepartmentRequest $request, Department $department);
    public function destroy(string $id);
    public function restore(string $id);
}
