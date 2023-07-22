<?php

namespace App\Services\Interfaces;

use App\Http\Requests\OrderRequest;
use App\Models\Order;

interface OrderServiceInterface
{
    public function store(OrderRequest $request);
    public function update(OrderRequest $request, Order $order);
    public function destroy(Order $order);
    public function restore(string $id);
}
