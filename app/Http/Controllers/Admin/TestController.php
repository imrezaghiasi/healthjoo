<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TestRequest;
use App\Models\Test;
use App\Repositories\Interfaces\TestRepositoryInterface;
use App\Services\Interfaces\TestServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    private string $redirectRoute = 'admin.tests.index';

    private readonly TestRepositoryInterface $testRepository;
    private readonly TestServiceInterface $testService;

    public function __construct(TestRepositoryInterface $testRepository, TestServiceInterface $testService)
    {
        $this->testRepository = $testRepository;
        $this->testService = $testService;
    }

    public function index(Request $request)
    {
        $tests = $this->testRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/Test/Index',compact('tests'));
    }


    public function create()
    {
        return Inertia::render('Admin/Test/Create');
    }


    public function store(TestRequest $request)
    {
        $this->testService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(Test $test)
    {
        //
    }

    public function edit(Test $test)
    {
        return Inertia::render('Admin/Test/Edit',compact('test'));
    }

    public function update(TestRequest $request, Test $test)
    {
        $this->testService->update($request,$test);
        return redirect()->route($this->redirectRoute);
    }

    public function destroy(Test $test)
    {
        $this->testService->destroy($test);
    }

    public function restore(string $id)
    {
        $this->testService->restore($id);
    }
}
