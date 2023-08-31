<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Models\OrderItem;
use App\Repositories\Interfaces\OrderRepositoryInterface;
use App\Services\Interfaces\OrderServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    private string $redirectRoute = 'admin.orders.index';

    private readonly OrderServiceInterface $orderService;
    private readonly OrderRepositoryInterface $orderRepository;

    public function __construct(OrderServiceInterface $orderService, OrderRepositoryInterface $orderRepository)
    {
        $this->orderService = $orderService;
        $this->orderRepository = $orderRepository;
    }

    public function index(Request $request)
    {
        $orders = $this->orderRepository->getWithTrashedLatest($request)->paginate(10);
        return Inertia::render('Admin/Order/Index',compact('orders'));
    }

    public function create()
    {
        $patients = $this->orderRepository->getPatientForOrder();
        $medicines = $this->orderRepository->getMedicineForOrder();
        return Inertia::render('Admin/Order/Create',compact('patients','medicines'));
    }

    public function store(OrderRequest $request)
    {
        $this->orderService->store($request);
        return redirect()->route($this->redirectRoute);
    }

    public function show(Order $order)
    {
        //
    }

    public function edit(Order $order)
    {
        //
    }

    public function update(Request $request, Order $order)
    {
        //
    }

    public function destroy(Order $order)
    {
        $this->orderService->destroy($order);
    }

    public function restore(string $id)
    {
        $this->orderService->restore($id);
    }

    public function get_details_order(Order $order)
    {
        $details_order = OrderItem::where('order_id',$order->id)->with('medicine')->latest()->paginate(10);
        return Inertia::render('Admin/Order/Details',compact('details_order'));
    }
}
