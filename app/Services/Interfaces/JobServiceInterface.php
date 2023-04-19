<?php

namespace App\Services\Interfaces;

use App\Http\Requests\JobRequest;
use App\Models\Job;

interface JobServiceInterface
{
    public function store(JobRequest $request);
    public function update(JobRequest $request, Job $job);
    public function destroy(string $id);
    public function restore(string $id);
}
