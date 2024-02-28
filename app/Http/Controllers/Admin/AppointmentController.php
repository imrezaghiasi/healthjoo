<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;
use App\Models\Clinic;
use App\Repositories\Interfaces\AppointmentRepositoryInterface;
use App\Services\Interfaces\AppointmentServiceInterface;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AppointmentController extends Controller
{
    private string $redirectRoute = 'admin.appointments.index';

    private readonly AppointmentRepositoryInterface $appointmentRepository;
    private readonly AppointmentServiceInterface $appointmentService;

    public function __construct(AppointmentRepositoryInterface $appointmentRepository, AppointmentServiceInterface $appointmentService)
    {
        $this->appointmentRepository = $appointmentRepository;
        $this->appointmentService = $appointmentService;
    }
    public function index(): Response
    {
        $appointments = $this->appointmentRepository->getWithTrashedLatest()->paginate(10);
        return Inertia::render('Admin/Appointment/Index',compact('appointments'));
    }

    public function create(): Response
    {
        $doctors = $this->appointmentRepository->getClinicForAppointments();
        return Inertia::render('Admin/Appointment/Create',compact('doctors'));
    }

    public function store(AppointmentRequest $request): RedirectResponse
    {
        if (Appointment::where([['clinic_id',$request->clinic_id],['started_at',Carbon::parse("$request->date_started_at $request->time_started_at")]])->exists())
            return back()->with('failed','قبلا این نوبت ثبت شده است');
        $this->appointmentService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(Appointment $appointment)
    {
        //
    }

    public function edit(Appointment $appointment): Response
    {
        $doctors = $this->appointmentRepository->getClinicForAppointments();
        return Inertia::render('Admin/Appointment/Edit',compact('appointment','doctors'));
    }

    public function update(AppointmentRequest $request, Appointment $appointment): RedirectResponse
    {
        $this->appointmentService->update($request, $appointment);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(Appointment $appointment): void
    {
        $this->appointmentService->destroy($appointment);
    }

    public function restore(string $id): void
    {
        $this->appointmentService->restore($id);
    }
}
