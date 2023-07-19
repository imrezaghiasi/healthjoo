<?php

namespace App\Repositories;

use App\Models\Test;
use App\Repositories\Interfaces\TestRepositoryInterface;
use Illuminate\Http\Request;

class TestRepository implements TestRepositoryInterface
{
    public function query()
    {
        return Test::query();
    }

    public function getWithTrashedLatest(Request $request)
    {
        return $this->query()->where('test_name', 'like','%'.$request->term.'%')->withTrashed()->latest();
    }
}
