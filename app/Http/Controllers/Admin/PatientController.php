<?php

namespace App\Http\Controllers\Admin;

use App\Enums\BloodGroup;
use App\Http\Controllers\Controller;
use App\Http\Requests\PatientRequest;
use App\Models\Patient;
use App\Repositories\Interfaces\PatientRepositoryInterface;
use App\Services\Interfaces\PatientServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller
{
    private string $redirectRoute = 'admin.patients.index';

    private PatientServiceInterface $patientService;
    private PatientRepositoryInterface $patientRepository;

    public function __construct(PatientServiceInterface $patientService, PatientRepositoryInterface $patientRepository){

        $this->patientService = $patientService;
        $this->patientRepository = $patientRepository;
    }

    public function index(Request $request)
    {
        $patients = $this->patientRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/Patient/Index',compact('patients'));
    }


    public function create()
    {
        $blood_groups = BloodGroup::cases();
        return Inertia::render('Admin/Patient/Create',compact('blood_groups'));
    }

    public function store(PatientRequest $request)
    {
        $this->patientService->store($request);
        return redirect()->route($this->redirectRoute);
    }


    public function show(Patient $patient)
    {
        //
    }

    public function edit(Patient $patient)
    {
        $request = $this->patientRepository->getRequestAppointment($patient);
        $blood_groups = BloodGroup::cases();
        return Inertia::render('Admin/Patient/Edit',compact('patient','blood_groups'));
    }

    public function update(PatientRequest $request, Patient $patient)
    {
        $this->patientService->update($request,$patient);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(string $id)
    {
        $this->patientService->destroy($id);
    }

    public function restore(string $id)
    {
        $this->patientService->restore($id);
    }

    public function getBookedAppointments(Patient $patient)
    {
        $bookedAppointments = $this->patientRepository->getRequestAppointment($patient)->paginate(10);
        return Inertia::render('Admin/Patient/BookedAppointments',compact('bookedAppointments'));
    }
}
