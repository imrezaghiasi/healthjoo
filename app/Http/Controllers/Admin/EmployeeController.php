<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmployeeRequest;
use App\Models\Employee;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::withTrashed()->with('job')->paginate(10);
        return Inertia::render('Admin/Employee/Index', compact('employees'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $jobs = Job::select('id', 'name')->get();
        return Inertia::render('Admin/Employee/Create', compact('jobs'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EmployeeRequest $request)
    {
        $employee = Employee::create([
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

        return redirect()->route('admin.employees.index');
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


    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $singer = Employee::FindOrFail($id);
        $singer->delete();
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(string $id)
    {
        $singer = Employee::withTrashed()->FindOrFail($id);

        $singer->restore();
    }
}
