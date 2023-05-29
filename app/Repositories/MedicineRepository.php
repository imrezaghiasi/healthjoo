<?php

namespace App\Repositories;

use App\Models\Medicine;
use App\Repositories\Interfaces\MedicineRepositoryInterface;
use Illuminate\Http\Request;

class MedicineRepository implements MedicineRepositoryInterface
{
    public function query()
    {
        return Medicine::query();
    }

    public function getWithTrashedLatest(Request $request)
    {
        return $this->query()->where('title','like','%'.$request->term.'%')->withTrashed()->latest();
    }
}
