<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobRequest;
use App\Models\Job;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Request;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jobs = Job::withTrashed()->latest()->paginate(10);
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
        $job = Job::create(
            [
                'name' => $request->name,
            ]
        );

        return redirect()->route('admin.jobs.index');
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
       $job->name = $request->name;

       $job->update();

       return redirect()->route('admin.jobs.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $singer = Job::FindOrFail($id);
        $singer->delete();
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(string $id)
    {
        $singer = Job::withTrashed()->FindOrFail($id);

        $singer->restore();
    }
}
