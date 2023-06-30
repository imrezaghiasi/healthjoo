<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DepartmentRequest;
use App\Models\Department;
use App\Repositories\Interfaces\DepartmentRepositoryInterface;
use App\Services\Interfaces\DepartmentServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    private string $redirectRoute = 'admin.departments.index';

    private readonly DepartmentRepositoryInterface $departmentRepository;
    private readonly DepartmentServiceInterface $departmentService;

    public function __construct(DepartmentRepositoryInterface $departmentRepository, DepartmentServiceInterface $departmentService)
    {
        $this->departmentRepository = $departmentRepository;
        $this->departmentService = $departmentService;
    }

    public function index(Request $request)
    {
        $departments = $this->departmentRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/Department/Index', compact('departments'));
    }


    public function create()
    {
        return Inertia::render('Admin/Department/Create');
    }

    public function store(DepartmentRequest $request)
    {
        $this->departmentService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(Department $department)
    {
        //
    }

    public function edit(Department $department)
    {
        return Inertia::render('Admin/Department/Edit', compact('department'));
    }

    public function update(DepartmentRequest $request, Department $department)
    {
        $this->departmentService->update($request, $department);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(string $id)
    {
        $this->departmentService->destroy($id);
    }

    public function restore(string $id)
    {
        $this->departmentService->restore($id);
    }
}
