<?php

namespace App\Services;

use App\Http\Requests\EmployeeRequest;
use App\Models\Employee;
use App\Services\Interfaces\EmployeeServiceInterface;
use Illuminate\Http\UploadedFile;

class EmployeeService implements EmployeeServiceInterface
{
    private Employee $employee;
    public function __construct(Employee $employee)
    {
        $this->employee = $employee;
    }

    public function store(EmployeeRequest $request)
    {
        return $this->employee->create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'gender' => $request->gender,
            'phone' => $request->phone,
            'email' => $request->email,
            'salary' => $request->salary,
            'job_id' => $request->job_id,
            'address' => $request->address,
            'photo_path' => $this->storeImage($request->file('photo')),
            'national_code' => $request->national_code
        ]);
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
        $employee->photo_path = $this->storeImage($request->file('photo'));
        $employee->national_code = $request->national_code;

        $employee->update();
    }

    public function storeImage(UploadedFile $photo)
    {
        if (!$photo) {
            return null;
        }

        $photoName = $photo->getClientOriginalName();

        $photo_path = $photo->storeAs('employeeImages', $photoName);

        return $photo_path;
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
