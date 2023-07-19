<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\LaboratoryTestItemRequest;
use App\Models\LaboratoryTestItem;
use App\Repositories\Interfaces\LaboratoryTestItemRepositoryInterface;
use App\Services\Interfaces\LaboratoryTestItemServiceInterface;
use Illuminate\Http\Request;

class LaboratoryTestItemController extends Controller
{
    private string $redirectRoute = 'admin.laboratory_test_items.index';

    private readonly LaboratoryTestItemRepositoryInterface $laboratoryTestItemRepository;
    private readonly LaboratoryTestItemServiceInterface $laboratoryTestItemService;

    public function __construct(LaboratoryTestItemRepositoryInterface $laboratoryTestItemRepository, LaboratoryTestItemServiceInterface $laboratoryTestItemService)
    {
        $this->laboratoryTestItemRepository = $laboratoryTestItemRepository;
        $this->laboratoryTestItemService = $laboratoryTestItemService;
    }

    public function index()
    {
        //
    }


    public function create()
    {
        //
    }


    public function store(LaboratoryTestItemRequest $request)
    {
        $this->laboratoryTestItemService->store($request);
        return redirect()->route($this->redirectRoute);
    }


    public function show(LaboratoryTestItem $laboratoryTestItem)
    {
        //
    }


    public function edit(LaboratoryTestItem $laboratoryTestItem)
    {
        //
    }

    public function update(Request $request, LaboratoryTestItem $laboratoryTestItem)
    {
        //
    }

    public function destroy(LaboratoryTestItem $laboratoryTestItem)
    {
        //
    }
}
