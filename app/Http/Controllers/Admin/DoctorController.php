<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DoctorRequest;
use App\Models\Doctor;
use App\Repositories\Interfaces\DoctorRepositoryInterface;
use App\Services\Interfaces\DoctorServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DoctorController extends Controller
{
    private string $redirectRoute = 'admin.doctors.index';

    private DoctorServiceInterface $doctorService;
    private DoctorRepositoryInterface $doctorRepository;

    public function __construct(DoctorServiceInterface $doctorService, DoctorRepositoryInterface $doctorRepository)
    {
        $this->doctorService = $doctorService;
        $this->doctorRepository = $doctorRepository;
    }

    public function index(Request $request)
    {
        $doctors = $this->doctorRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/Doctor/Index',compact('doctors'));
    }

    public function create()
    {
        return Inertia::render('Admin/Doctor/Create');
    }

    public function store(DoctorRequest $request)
    {
        $this->doctorService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(Doctor $doctor)
    {
        //
    }

    public function edit(Doctor $doctor)
    {
        return Inertia::render('Admin/Doctor/Edit',compact('doctor'));
    }

    public function update(DoctorRequest $request, Doctor $doctor)
    {
        $this->doctorService->update($request,$doctor);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(string $id)
    {
        $this->doctorService->destroy($id);
    }

    public function restore(string $id)
    {
        $this->doctorService->restore($id);
    }
}
