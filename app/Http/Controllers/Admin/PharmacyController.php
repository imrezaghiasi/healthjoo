<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PharmacyOperationRequest;
use App\Http\Requests\PharmacyRequest;
use App\Models\Pharmacy;
use App\Repositories\Interfaces\PharmacyRepositoryInterface;
use App\Services\Interfaces\PharmacyServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PharmacyController extends Controller
{
    private string $redirectRoute = 'admin.pharmacy.index';

    private readonly PharmacyRepositoryInterface $pharmacyRepository;
    private readonly PharmacyServiceInterface $pharmacyService;

    public function __construct(PharmacyRepositoryInterface $pharmacyRepository, PharmacyServiceInterface $pharmacyService)
    {
        $this->pharmacyRepository = $pharmacyRepository;
        $this->pharmacyService = $pharmacyService;
    }

    public function index()
    {
        $pharmacy = $this->pharmacyRepository->getWithTrashedLatest()->paginate(10);
        return Inertia::render('Admin/Pharmacy/Index',compact('pharmacy'));

    }

    public function create()
    {
        $medicines = $this->pharmacyRepository->getMedicineForPharmacy();
        return Inertia::render('Admin/Pharmacy/Create',compact('medicines'));
    }

    public function store(PharmacyRequest $request)
    {
        $this->pharmacyService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(Pharmacy $pharmacy)
    {
        //
    }

    public function edit(Pharmacy $pharmacy)
    {
        $medicines = $this->pharmacyRepository->getMedicineForPharmacy();
        return Inertia::render('Admin/Pharmacy/Edit',compact('medicines','pharmacy'));
    }


    public function update(PharmacyRequest $request, Pharmacy $pharmacy)
    {
        $this->pharmacyService->update($request,$pharmacy);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(Pharmacy $pharmacy)
    {
        $this->pharmacyService->destroy($pharmacy);
    }

    public function restore(string $id)
    {
        $this->pharmacyService->restore($id);
    }

    public function increase(Pharmacy $pharmacy)
    {
        return Inertia::render('Admin/Pharmacy/Increase',compact('pharmacy'));
    }
    public function store_increase(PharmacyOperationRequest $request,Pharmacy $pharmacy)
    {
        $this->pharmacyService->store_increase($request,$pharmacy);
        return redirect()->route($this->redirectRoute);
    }

    public function reduce(Pharmacy $pharmacy)
    {
        return Inertia::render('Admin/Pharmacy/Reduce',compact('pharmacy'));
    }
    public function store_reduce(PharmacyOperationRequest $request,Pharmacy $pharmacy)
    {
        $this->pharmacyService->store_reduce($request,$pharmacy);
        return redirect()->route($this->redirectRoute);
    }
}
