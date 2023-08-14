<?php

namespace App\Repositories;

use App\Models\Medicine;
use App\Models\Pharmacy;
use App\Repositories\Interfaces\PharmacyRepositoryInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class PharmacyRepository implements PharmacyRepositoryInterface
{
    public function query(): Builder
    {
        return Pharmacy::query();
    }


    public function getWithTrashedLatest(Request $request = null)
    {
        return $this->query()->with(['medicine' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
    }

    public function getMedicineForPharmacy()
    {
        return Medicine::select('id','title')->get();
    }
}
