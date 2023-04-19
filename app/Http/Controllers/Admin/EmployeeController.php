<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmployeeRequest;
use App\Models\Employee;
use App\Models\Job;
use App\Repositories\EmployeeRepository;
use App\Repositories\Interfaces\EmployeeRepositoryInterface;
use App\Services\Interfaces\EmployeeServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;

class EmployeeController extends Controller
{

    private EmployeeRepositoryInterface $employeeRepository;
    private EmployeeServiceInterface $employeeService;

    public function __construct(EmployeeRepositoryInterface $employeeRepository, EmployeeServiceInterface $employeeService)
    {
        $this->employeeRepository = $employeeRepository;
        $this->employeeService = $employeeService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = $this->employeeRepository->getWithTrashedLatest()->paginate(10);
        return Inertia::render('Admin/Employee/Index', compact('employees'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $jobs = $this->employeeRepository->getJobForEmployees();
        return Inertia::render('Admin/Employee/Create', compact('jobs'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EmployeeRequest $request)
    {
        $this->employeeService->store($request);
        return redirect()->route('admin.employees.index');
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
        $jobs = $this->employeeRepository->getJobForEmployees();
        return Inertia::render('Admin/Employee/Edit',compact(['employee','jobs']));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EmployeeRequest $request, Employee $employee)
    {
        $this->employeeService->update($request,$employee);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->employeeService->destroy($id);
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(string $id)
    {
       $this->employeeService->restore($id);
    }
}
