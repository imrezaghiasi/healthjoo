<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MedicineRequest;
use App\Models\Medicine;
use App\Repositories\Interfaces\MedicineRepositoryInterface;
use App\Services\Interfaces\MedicineServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MedicineController extends Controller
{
    private string $redirectRoute = 'admin.medicines.index';

    private MedicineRepositoryInterface $medicineRepository;
    private MedicineServiceInterface $medicineService;

    public function __construct(MedicineRepositoryInterface $medicineRepository, MedicineServiceInterface $medicineService)
    {
        $this->medicineRepository = $medicineRepository;
        $this->medicineService = $medicineService;
    }

    public function index(Request $request)
    {
        $medicines = $this->medicineRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/Medicine/Index',compact('medicines'));
    }

    public function create()
    {
        return Inertia::render('Admin/Medicine/Create');
    }


    public function store(MedicineRequest $request)
    {
        $this->medicineService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(Medicine $medicine)
    {
        //
    }

    public function edit(Medicine $medicine)
    {
        return Inertia::render('Admin/Medicine/Edit',compact('medicine'));
    }

    public function update(MedicineRequest $request, Medicine $medicine)
    {
        $this->medicineService->update($request,$medicine);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(string $id)
    {
        $this->medicineService->destroy($id);
    }

    public function restore(string $id)
    {
        $this->medicineService->restore($id);
    }
}
