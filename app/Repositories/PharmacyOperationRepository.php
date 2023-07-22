<?php

namespace App\Repositories;

use App\Models\PharmacyOperation;
use App\Repositories\Interfaces\PharmacyOperationRepositoryInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class PharmacyOperationRepository implements PharmacyOperationRepositoryInterface
{
    public function query(): Builder
    {
        return PharmacyOperation::query();
    }

    public function getWithTrashedLatest(Request $request = null)
    {
        return $this->query()->with(['pharmacy' => function($q){
            $q->withTrashed();
        }, 'order' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
    }
}
