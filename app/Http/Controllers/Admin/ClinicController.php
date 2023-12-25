<?php

namespace App\Http\Controllers\Admin;

use App\Enums\Weekday;
use App\Http\Controllers\Controller;
use App\Http\Requests\ClinicRequest;
use App\Models\Clinic;
use App\Repositories\Interfaces\ClinicRepositoryInterface;
use App\Services\Interfaces\ClinicServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ClinicController extends Controller
{

    private string $redirectRoute = 'admin.clinics.index';

    private readonly ClinicRepositoryInterface $clinicRepository;
    private readonly ClinicServiceInterface $clinicService;

    public function __construct(ClinicRepositoryInterface $clinicRepository, ClinicServiceInterface $clinicService)
    {
        $this->clinicRepository = $clinicRepository;
        $this->clinicService = $clinicService;
    }

    public function index()
    {
        $clinics = $this->clinicRepository->getWithTrashedLatest()->paginate(10);
        return Inertia::render('Admin/Clinic/Index',compact('clinics'));
    }


    public function create()
    {
        $doctors = $this->clinicRepository->getDoctorsForAppointment();
        return Inertia::render('Admin/Clinic/Create',compact('doctors'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ClinicRequest $request)
    {
        $this->clinicService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    /**
     * Display the specified resource.
     */
    public function show(Clinic $clinic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Clinic $clinic)
    {
        $doctors = $this->clinicRepository->getDoctorsForAppointment();
        return Inertia::render('Admin/Clinic/Edit',compact('doctors','clinic'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ClinicRequest $request, Clinic $clinic)
    {
        $this->clinicService->update($request, $clinic);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(Clinic $clinic)
    {
        $this->clinicService->destroy($clinic);
    }

    public function restore(string $id)
    {
        $this->clinicService->restore($id);
    }
}
