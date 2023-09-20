<?php

namespace App\Services;

use App\Http\Requests\OrderRequest;
use App\Models\Medicine;
use App\Models\Order;
use App\Models\PharmacyOperation;
use App\Services\Interfaces\OrderServiceInterface;

class OrderService implements OrderServiceInterface
{
    private Order $order;
    private PharmacyOperation $pharmacyOperation;
    public function __construct(Order $order, PharmacyOperation $pharmacyOperation)
    {
        $this->order = $order;
        $this->pharmacyOperation = $pharmacyOperation;
    }


    public function store(OrderRequest $request)
    {
        $totalAmount = 0;
        $this->order->patient_id = $request->patient_id;
        $this->order->is_paid = $request->is_paid;
        $this->order->save();
        foreach ($request->selected_medicines as $selected_medicine) {
            $medicine = Medicine::find($selected_medicine['medicine_id']);

            if ($medicine->pharmacy->quantity >= $selected_medicine['count']) {

                $totalAmount += $selected_medicine['price'] * $selected_medicine['count'];

                $this->pharmacyOperation->create([
                    'pharmacy_id' => $medicine->pharmacy->id,
                    'operation' => 0,
                    'count' => $selected_medicine['count'],
                    'description' => 'خرید مشتری'
                ]);

                $medicine->pharmacy->quantity -= $selected_medicine['count'];
                if ($medicine->pharmacy->quantity == 0)
                    $medicine->pharmacy->in_stock = 0;
                $medicine->pharmacy->update();
                $this->order->order_items()->create([
                    'medicine_id' => $selected_medicine['medicine_id'],
                    'count' => $selected_medicine['count'],
                ]);
            }
        }
        $this->order->pay_amount = $totalAmount;
        $this->order->update();
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
