<?php

namespace App\Repositories;

use App\Models\Disease;
use App\Repositories\Interfaces\DiseaseRepositoryInterface;
use Illuminate\Http\Request;

class DiseaseRepository implements DiseaseRepositoryInterface
{
    public function query()
    {
        return Disease::query();
    }

    public function getWithTrashedLatest(Request $request)
    {
        return $this->query()->where('name','like','%'.$request->term.'%')->withTrashed()->latest();
    }
}
