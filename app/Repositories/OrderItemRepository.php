<?php

namespace App\Repositories;

use App\Models\OrderItem;
use App\Repositories\Interfaces\OrderItemRepositoryInterface;
use http\QueryString;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class OrderItemRepository implements OrderItemRepositoryInterface
{
    public function query(): Builder
    {
        return OrderItem::query();
    }

    public function getWithTrashedLatest(Request $request = null)
    {
        return $this->query()->with(['medicine' => function($q){
            $q->withTrashed();
        }, 'order' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
    }
}
