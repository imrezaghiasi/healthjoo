<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\LaboratoryTestRequest;
use App\Models\LaboratoryTest;
use App\Models\Test;
use App\Repositories\Interfaces\LaboratoryTestRepositoryInterface;
use App\Services\Interfaces\LaboratoryTestServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LaboratoryTestController extends Controller
{
    private string $redirectRoute = 'admin.laboratory_tests.index';

    private readonly LaboratoryTestRepositoryInterface $laboratoryTestRepository;
    private readonly LaboratoryTestServiceInterface $laboratoryTestService;
    public function __construct(LaboratoryTestRepositoryInterface $laboratoryTestRepository, LaboratoryTestServiceInterface $laboratoryTestService)
    {
        $this->laboratoryTestRepository = $laboratoryTestRepository;
        $this->laboratoryTestService = $laboratoryTestService;
    }

    public function index()
    {
        $laboratory_tests = $this->laboratoryTestRepository->getWithTrashedLatest()->paginate(10);
        return Inertia::render('Admin/Laboratory/Index',compact('laboratory_tests'));
    }

    public function create()
    {
        $patients = $this->laboratoryTestRepository->getPatientForLaboratoryTest();
        return Inertia::render('Admin/Laboratory/Create',compact('patients'));
    }

    public function store(LaboratoryTestRequest $request)
    {
        $this->laboratoryTestService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(LaboratoryTest $laboratoryTest)
    {
        $result = $laboratoryTest->laboratory_test_items()->with(['test'])->get();
        $laboratory_test = $laboratoryTest->patient;
        return Inertia::render('Admin/Laboratory/ShowResults', compact('result','laboratory_test'));
    }

    public function edit(LaboratoryTest $laboratory_test)
    {
        $patients = $this->laboratoryTestRepository->getPatientForLaboratoryTest();
        return Inertia::render('Admin/Laboratory/Edit',compact('laboratory_test','patients'));
    }

    public function update(LaboratoryTestRequest $request, LaboratoryTest $laboratoryTest)
    {
        $this->laboratoryTestService->update($request,$laboratoryTest);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(LaboratoryTest $laboratoryTest)
    {
        $this->laboratoryTestService->destroy($laboratoryTest);
    }
    public function restore(string $id)
    {
        $this->laboratoryTestService->restore($id);
    }

    public function create_laboratory_test_results(string $id)
    {
        $tests = Test::all();
         return Inertia::render('Admin/Laboratory/AddTestItem',compact('id','tests'));
    }

    public function store_laboratory_test_results(Request $request)
    {
        $this->laboratoryTestService->store_laboratory_test_results($request);
        return redirect()->route($this->redirectRoute);
    }

}
