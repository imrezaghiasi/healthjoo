<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobRequest;
use App\Models\Job;
use App\Repositories\Interfaces\JobRepositoryInterface;
use App\Services\Interfaces\JobServiceInterface;
use Inertia\Inertia;

class JobController extends Controller
{

    private string $redirectRoute = 'admin.employees.index';

    private JobRepositoryInterface $jobRepository;
    private JobServiceInterface $jobService;

    public function __construct(JobRepositoryInterface $jobRepository, JobServiceInterface $jobService)
    {
        $this->jobRepository = $jobRepository;
        $this->jobService = $jobService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
//        $jobs = Job::withTrashed()->latest()->paginate(5);
        $jobs = $this->jobRepository->getAllLatest()->paginate(5);
        return Inertia::render('Admin/Job/Index',compact('jobs'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Job/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(JobRequest $request)
    {
        $this->jobService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    /**
     * Display the specified resource.
     */
    public function show(Job $job)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Job $job)
    {
        return Inertia::render('Admin/Job/Edit',compact('job'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(JobRequest $request, Job $job)
    {
       $this->jobService->update($request,$job);

       return redirect()->route($this->redirectRoute);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->jobService->destroy($id);
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(string $id)
    {
        $this->jobService->restore($id);
    }
}
