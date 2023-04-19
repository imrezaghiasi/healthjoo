<?php

namespace App\Services\Interfaces;

use App\Http\Requests\EmployeeRequest;
use App\Models\Employee;

interface EmployeeServiceInterface
{
    public function store(EmployeeRequest $request);
    public function update(EmployeeRequest $request, Employee $employee);
    public function destroy(string $id);
    public function restore(string $id);
}
