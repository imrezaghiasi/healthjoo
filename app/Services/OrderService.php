<?php

namespace App\Services;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Services\Interfaces\OrderServiceInterface;

class OrderService implements OrderServiceInterface
{
    private Order $order;
    public function __construct(Order $order)
    {
        $this->order = $order;
    }


    public function store(OrderRequest $request)
    {
        return $this->order->create([
            'patient_id' => $request->patient_id,
            'pay_amount' => $request->pay_amount,
            'is_paid' => $request->is_paid,
        ]);
    }

    public function update(OrderRequest $request, Order $order)
    {
        $order->patient_id = $request->patient_id;
        $order->pay_amount = $request->pay_amount;
        $order->is_paid = $request->is_paid;
        $order->update();
    }

    public function destroy(Order $order)
    {
        $order->delete();
    }

    public function restore(string $id)
    {
        $order = $this->order->withTrashed()->FindOrFail($id);
        $order->restore();
    }
}
