<?php

namespace App\Services\Interfaces;

use App\Http\Requests\OrderItemRequest;
use App\Models\OrderItem;

interface OrderItemServiceInterface
{
    public function store(OrderItemRequest $request);
    public function update(OrderItemRequest $request, OrderItem $orderItem);
    public function destroy(OrderItem $orderItem);
    public function restore(string $id);
}
