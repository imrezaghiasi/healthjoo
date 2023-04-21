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

    private string $redirectRoute = 'admin.jobs.index';

    private JobRepositoryInterface $jobRepository;
    private JobServiceInterface $jobService;

    public function __construct(JobRepositoryInterface $jobRepository, JobServiceInterface $jobService)
    {
        $this->jobRepository = $jobRepository;
        $this->jobService = $jobService;
    }

    public function index()
    {
//        $jobs = Job::withTrashed()->latest()->paginate(5);
        $jobs = $this->jobRepository->getAllLatest()->paginate(5);
        return Inertia::render('Admin/Job/Index',compact('jobs'));
    }

    public function create()
    {
        return Inertia::render('Admin/Job/Create');
    }

    public function store(JobRequest $request)
    {
        $this->jobService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(Job $job)
    {
        //
    }

    public function edit(Job $job)
    {
        return Inertia::render('Admin/Job/Edit',compact('job'));
    }

    public function update(JobRequest $request, Job $job)
    {
       $this->jobService->update($request,$job);

       return redirect()->route($this->redirectRoute);
    }

    public function destroy(string $id)
    {
        $this->jobService->destroy($id);
    }

    public function restore(string $id)
    {
        $this->jobService->restore($id);
    }
}
