<?php

namespace App\Services;

use App\Http\Requests\JobRequest;
use App\Models\Job;
use App\Services\Interfaces\JobServiceInterface;

class JobService implements JobServiceInterface
{
    private Job $job;
    public function __construct(Job $job)
    {
        $this->job = $job;
    }

    public function store(JobRequest $request)
    {
        return $this->job->create([
            'name' => $request->name
        ]);
    }

    public function update(JobRequest $request, Job $job)
    {
        $job->name = $request->name;
        $job->update();
    }

    public function destroy(string $id)
    {
        $job = $this->job->FindOrFail($id);
        $job->delete();
    }

    public function restore(string $id)
    {
        $job = $this->job->withTrashed()->FindOrFail($id);
        $job->restore();
    }
}
