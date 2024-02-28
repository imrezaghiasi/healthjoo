<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RequestAppointmentRequest;
use App\Models\Appointment;
use App\Models\Disease;
use App\Models\Doctor;
use App\Models\RequestAppointment;
use App\Repositories\Interfaces\RequestAppointmentRepositoryInterface;
use App\Repositories\RequestAppointmentRepository;
use App\Services\Interfaces\RequestAppointmentServiceInterface;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RequestAppointmentController extends Controller
{
    private string $redirectRoute = 'admin.appointments.index';

    private readonly RequestAppointmentRepositoryInterface $requestAppointmentRepository;
    private readonly RequestAppointmentServiceInterface $requestAppointmentService;

    public function __construct(RequestAppointmentRepositoryInterface $requestAppointmentRepository, RequestAppointmentServiceInterface $requestAppointmentService)
    {
        $this->requestAppointmentRepository = $requestAppointmentRepository;
        $this->requestAppointmentService = $requestAppointmentService;
    }

    public function index(Request $request)
    {
        $requestAppointments = $this->requestAppointmentRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/RequestAppointment/Index', compact('requestAppointments'));
    }

    public function create()
    {
        $appointments = $this->requestAppointmentRepository->getAppointmentForRequestAppointments();
        return Inertia::render('Admin/RequestAppointment/Create', compact('appointments'));
    }

    public function store(RequestAppointmentRequest $request)
    {
        $this->requestAppointmentService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(RequestAppointment $requestAppointment)
    {
        //
    }

    public function edit(RequestAppointment $requestAppointment)
    {
        $appointments = $this->requestAppointmentRepository->getAppointmentForRequestAppointments();
        return Inertia::render('Admin/RequestAppointment/Edit', compact('requestAppointment', 'appointments'));
    }

    public function update(RequestAppointmentRequest $request, RequestAppointment $requestAppointment)
    {
        $this->requestAppointmentService->update($request, $requestAppointment);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(RequestAppointment $requestAppointment)
    {
        $this->requestAppointmentService->destroy($requestAppointment);
    }

    public function restore(string $id)
    {
        $this->requestAppointmentService->restore($id);
    }

    public function getAppointmentsForUser()
    {
        $requestAppointments = $this->requestAppointmentRepository->getAppointmentsForUser()->paginate(10);
        return Inertia::render('Dashboard',compact('requestAppointments'));
    }

    public function confirmRequestAppointment(RequestAppointment $requestAppointment)
    {
        $this->requestAppointmentService->confirmRequestAppointment($requestAppointment);
    }

    public function cancelRequestAppointment(RequestAppointment $requestAppointment)
    {
        $this->requestAppointmentService->cancelRequestAppointment($requestAppointment);
    }
}

