<?php

namespace App\Repositories;

use App\Models\Job;
use App\Repositories\Interfaces\JobRepositoryInterface;
use Illuminate\Http\Request;

class JobRepository implements JobRepositoryInterface
{
    public function query()
    {
        return Job::query();
    }

    public function getWithTrashedLatest(Request $request)
    {
        return $this->query()->where('name','like','%'.$request->term.'%')->withTrashed()->latest();
    }
}
