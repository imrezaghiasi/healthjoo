<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BedRequest;
use App\Models\Bed;
use App\Repositories\Interfaces\BedRepositoryInterface;
use App\Services\Interfaces\BedServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BedController extends Controller
{
    private string $redirectRoute = 'admin.beds.index';

    private readonly BedServiceInterface $bedService;
    private readonly BedRepositoryInterface $bedRepository;

    public function __construct(BedServiceInterface $bedService, BedRepositoryInterface $bedRepository)
    {
        $this->bedService = $bedService;
        $this->bedRepository = $bedRepository;
    }

    public function index(Request $request)
    {
        $beds = $this->bedRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/Bed/Index',compact('beds'));
    }


    public function create()
    {
        $departments = $this->bedRepository->getDepartmentForBeds();
        $rooms = $this->bedRepository->getRoomForBeds();
        return Inertia::render('Admin/Bed/Create',compact('departments','rooms'));
    }

    public function store(BedRequest $request)
    {
        $this->bedService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(Bed $bed)
    {
        //
    }

    public function edit(Bed $bed)
    {
        $departments = $this->bedRepository->getDepartmentForBeds();
        $rooms = $this->bedRepository->getRoomForBeds();
        return Inertia::render('Admin/Bed/Edit',compact('bed','departments','rooms'));
    }

    public function update(BedRequest $request, Bed $bed)
    {
        $this->bedService->update($request, $bed);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(Bed $bed)
    {
        $this->bedService->destroy($bed);
    }

    public function restore(string $id)
    {
        $this->bedService->restore($id);
    }
}
