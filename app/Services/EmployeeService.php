<?php

namespace App\Services;

use App\Http\Requests\EmployeeRequest;
use App\Models\Employee;
use App\Services\Interfaces\EmployeeServiceInterface;
use App\Services\Interfaces\ImageUploaderServiceInterface;

class EmployeeService implements EmployeeServiceInterface
{
    private Employee $employee;
    private ImageUploaderServiceInterface $imageUploaderService;

    public function __construct(Employee $employee, Interfaces\ImageUploaderServiceInterface $imageUploaderService)
    {
        $this->employee = $employee;
        $this->imageUploaderService = $imageUploaderService;
    }

    public function store(EmployeeRequest $request)
    {
        $this->employee->first_name = $request->first_name;
        $this->employee->last_name = $request->last_name;
        $this->employee->gender = $request->gender;
        $this->employee->phone = $request->phone;
        $this->employee->email = $request->email;
        $this->employee->salary = $request->salary;
        $this->employee->job_id = $request->job_id;
        $this->employee->address = $request->address;
        $this->employee->national_code = $request->national_code;
        if ($request->file('photo')) {
            $this->employee->photo_path = $this->imageUploaderService->storeImage($request->file('photo'), 'employeesPhoto');
        }
        $this->employee->save();
    }

    public function update(EmployeeRequest $request, Employee $employee)
    {
        $employee->first_name = $request->first_name;
        $employee->last_name = $request->last_name;
        $employee->gender = $request->gender;
        $employee->phone = $request->phone;
        $employee->email = $request->email;
        $employee->salary = $request->salary;
        $employee->job_id = $request->job_id;
        $employee->address = $request->address;
        $employee->national_code = $request->national_code;
        if ($request->file('photo')) {
            $this->imageUploaderService->updateImage($request->file('photo'), $employee,'employeesPhoto');
        }

        $employee->update();
    }


    public function destroy(string $id)
    {
        $employee = $this->employee->FindOrFail($id);
        $employee->delete();
    }

    public function restore(string $id)
    {
        $employee = $this->employee->withTrashed()->FindOrFail($id);
        $employee->restore();
    }
}
