<?php

namespace App\Repositories;

use App\Models\LaboratoryTestItem;
use App\Repositories\Interfaces\LaboratoryTestItemRepositoryInterface;
use Illuminate\Http\Request;

class LaboratoryTestItemRepository implements LaboratoryTestItemRepositoryInterface
{
    public function query()
    {
        return LaboratoryTestItem::query();
    }

    public function getWithTrashedLatest()
    {
        return $this->query()->with(['test' => function($q){
            $q->withTrashed();
        },'laboratory_test' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
    }
}
