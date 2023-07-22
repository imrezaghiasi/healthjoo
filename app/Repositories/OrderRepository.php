<?php

namespace App\Repositories;

use App\Models\Order;
use App\Repositories\Interfaces\OrderRepositoryInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class OrderRepository implements OrderRepositoryInterface
{
    public function query(): Builder
    {
        return Order::query();
    }

    public function getWithTrashedLatest(Request $request = null)
    {
        return $this->query()->with(['patient' => function($q){
            $q->withTrashed();
        }])->withTrashed()->latest();
    }
}
