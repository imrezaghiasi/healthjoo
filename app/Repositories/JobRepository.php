<?php

namespace App\Repositories;

use App\Models\Job;
use App\Repositories\Interfaces\JobRepositoryInterface;

class JobRepository implements JobRepositoryInterface
{
    public function getAllWithTrashed()
    {
        return $this->query()->withTrashed();
    }

    public function getAllLatest()
    {
        return $this->query()->withTrashed()->latest();
    }

    public function getAllPaginate($count)
    {
        return $this->query()->paginate($count);
    }

    public function query()
    {
        return Job::query();
    }
}
