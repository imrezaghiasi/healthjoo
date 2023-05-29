<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmployeeRequest;
use App\Models\Employee;
use App\Repositories\Interfaces\EmployeeRepositoryInterface;
use App\Services\Interfaces\EmployeeServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeController extends Controller
{

    private string $redirectRoute = 'admin.employees.index';

    private EmployeeRepositoryInterface $employeeRepository;
    private EmployeeServiceInterface $employeeService;

    public function __construct(EmployeeRepositoryInterface $employeeRepository, EmployeeServiceInterface $employeeService)
    {
        $this->employeeRepository = $employeeRepository;
        $this->employeeService = $employeeService;
    }

    public function index(Request $request)
    {
        $employees = $this->employeeRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/Employee/Index', compact('employees'));
    }

    public function create()
    {
        $jobs = $this->employeeRepository->getJobForEmployees();
        return Inertia::render('Admin/Employee/Create', compact('jobs'));
    }

    public function store(EmployeeRequest $request)
    {
        $this->employeeService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(Employee $employee)
    {
        //
    }

    public function edit(Employee $employee)
    {
        $jobs = $this->employeeRepository->getJobForEmployees();
        return Inertia::render('Admin/Employee/Edit',compact(['employee','jobs']));
    }

    public function update(EmployeeRequest $request, Employee $employee)
    {
        $this->employeeService->update($request,$employee);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(string $id)
    {
        $this->employeeService->destroy($id);
    }

    public function restore(string $id)
    {
       $this->employeeService->restore($id);
    }
}
