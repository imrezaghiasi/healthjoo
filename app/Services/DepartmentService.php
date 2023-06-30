<?php

namespace App\Services;

use App\Http\Requests\DepartmentRequest;
use App\Models\Department;
use App\Services\Interfaces\DepartmentServiceInterface;

class DepartmentService implements DepartmentServiceInterface
{
    private Department $department;
    public function __construct(Department $department)
    {
        $this->department = $department;
    }

    public function store(DepartmentRequest $request)
    {
        return $this->department->create([
            'name' => $request->name,
            'description' => $request->description
        ]);
    }

    public function update(DepartmentRequest $request, Department $department)
    {
        $department->name = $request->name;
        $department->description = $request->description;
        $department->update();
    }

    public function destroy(string $id)
    {
        $department = $this->department->FindOrFail($id);
        $department->delete();
    }

    public function restore(string $id)
    {
        $department = $this->department->withTrashed()->FindOrFail($id);
        $department->restore();
    }
}
