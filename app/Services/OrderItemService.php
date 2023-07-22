<?php

namespace App\Services;

use App\Http\Requests\OrderItemRequest;
use App\Models\OrderItem;
use App\Services\Interfaces\OrderItemServiceInterface;

class OrderItemService implements OrderItemServiceInterface
{
    private OrderItem $orderItem;
    public function __construct(OrderItem $orderItem)
    {
        $this->orderItem = $orderItem;
    }

    public function store(OrderItemRequest $request)
    {
        return $this->orderItem->create([
            'medicine_id' => $request->medicine_id,
            'order_id' => $request->order_id,
            'count' => $request->count,
        ]);
    }

    public function update(OrderItemRequest $request, OrderItem $orderItem)
    {
        $orderItem->medicine_id = $request->medicine_id;
        $orderItem->order_id = $request->order_id;
        $orderItem->count = $request->count;
        $orderItem->update();
    }

    public function destroy(OrderItem $orderItem)
    {
        $orderItem->delete();
    }

    public function restore(string $id)
    {
        $orderItem = $this->orderItem->withTrashed()->FindOrFail($id);
        $orderItem->restore();
    }
}
