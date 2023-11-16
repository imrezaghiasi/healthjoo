<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DiseaseRequest;
use App\Models\Disease;
use App\Repositories\Interfaces\DiseaseRepositoryInterface;
use App\Services\Interfaces\DiseaseServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DiseaseController extends Controller
{

    private string $redirectRoute = 'admin.diseases.index';

    private DiseaseServiceInterface $diseaseService;
    private DiseaseRepositoryInterface $diseaseRepository;

    public function __construct(DiseaseServiceInterface $diseaseService, DiseaseRepositoryInterface $diseaseRepository){

        $this->diseaseService = $diseaseService;
        $this->diseaseRepository = $diseaseRepository;
    }

    public function index(Request $request)
    {
        $diseases = $this->diseaseRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/Disease/Index',compact('diseases'));
    }

    public function create()
    {
        return Inertia::render('Admin/Disease/Create');
    }

    public function store(DiseaseRequest $request)
    {
        $this->diseaseService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(Disease $disease)
    {
        //
    }

    public function edit(Disease $disease)
    {
        return Inertia::render('Admin/Disease/Edit',compact('disease'));
    }

    public function update(DiseaseRequest $request, Disease $disease)
    {
        $this->diseaseService->update($request,$disease);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(Disease $disease)
    {
        $this->diseaseService->destroy($disease);
    }

    public function restore(string $id)
    {
        $this->diseaseService->restore($id);
    }
}
