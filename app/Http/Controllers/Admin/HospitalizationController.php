<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\HospitalizationRequest;
use App\Models\Hospitalization;
use App\Repositories\Interfaces\HospitalizationRepositoryInterface;
use App\Services\Interfaces\HospitalizationServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HospitalizationController extends Controller
{
    private string $redirectRoute = 'admin.hospitalizations.index';

    private readonly HospitalizationRepositoryInterface $hospitalizationRepository;
    private readonly HospitalizationServiceInterface $hospitalizationService;


    public function __construct(HospitalizationRepositoryInterface $hospitalizationRepository, HospitalizationServiceInterface $hospitalizationService)
    {
        $this->hospitalizationRepository = $hospitalizationRepository;
        $this->hospitalizationService = $hospitalizationService;
    }

    public function index(Request $request)
    {
        $hospitalizations = $this->hospitalizationRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/Hospitalization/Index', compact('hospitalizations'));
    }


    public function create()
    {
        $patients = $this->hospitalizationRepository->getPatientForHospitalization();
        $rooms = $this->hospitalizationRepository->getRoomForHospitalization();
        $doctors = $this->hospitalizationRepository->getDoctorForHospitalization();
        return Inertia::render('Admin/Hospitalization/Create', compact('patients','rooms','doctors'));
    }


    public function store(HospitalizationRequest $request)
    {
        $this->hospitalizationService->store($request);
        return redirect()->route($this->redirectRoute);
    }


    public function show(Hospitalization $hospitalization)
    {
        //
    }


    public function edit(Hospitalization $hospitalization)
    {
        $patients = $this->hospitalizationRepository->getPatientForHospitalization();
        $rooms = $this->hospitalizationRepository->getRoomForHospitalization();
        $doctors = $this->hospitalizationRepository->getDoctorForHospitalization();
        return Inertia::render('Admin/Hospitalization/Edit', compact('hospitalization','patients','rooms','doctors'));
    }

    public function update(HospitalizationRequest $request, Hospitalization $hospitalization)
    {
        $this->hospitalizationService->update($request,$hospitalization);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(string $id)
    {
        $this->hospitalizationService->destroy($id);
    }

    public function restore(string $id)
    {
        $this->hospitalizationService->restore($id);
    }
}
