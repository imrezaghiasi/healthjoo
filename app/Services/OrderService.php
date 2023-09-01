<?php

namespace App\Services;

use App\Http\Requests\OrderRequest;
use App\Models\Medicine;
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
        $totalAmount = 0;

        foreach ($request->selected_medicines as $selected_medicine) {
            $medicine = Medicine::find($selected_medicine['medicine_id']);

            if ($medicine->pharmacy->quantity >= $selected_medicine['count']) {

                $totalAmount += $selected_medicine['price'] * $selected_medicine['count'];
                $order = $this->order->create([
                    'patient_id' => $request->patient_id,
                    'pay_amount' => $totalAmount,
                    'is_paid' => $request->is_paid,
                ]);

                $medicine->pharmacy->quantity -= $selected_medicine['count'];
                if ($medicine->pharmacy->quantity == 0)
                    $medicine->pharmacy->in_stock = 0;
                $medicine->pharmacy->update();
                $order->order_items()->create([
                    'medicine_id' => $selected_medicine['medicine_id'],
                    'count' => $selected_medicine['count'],
                ]);
            }
        }
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
