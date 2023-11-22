<?php

namespace App\Repositories;

use App\Models\Medicine;
use App\Models\Order;
use App\Models\Patient;
use App\Repositories\Interfaces\OrderRepositoryInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class OrderRepository implements OrderRepositoryInterface
{
    public function query(): Builder
    {
        return Order::query();
    }

    public function getWithTrashedLatest(Request $request)
    {
        return $this->query()->withWhereHas('patient', function ($query) use ($request) {
            if ($request->term !== null) {
                $query->where('national_code', $request->term);
            }
        })->withTrashed()->latest();
    }

    public function getPatientForOrder()
    {
        return Patient::select('id','first_name','last_name','national_code')->get();
    }


    public function getMedicineForOrder()
    {
        return Medicine::select('id','title','price')->with('pharmacy')->whereHas('pharmacy',function ($q){
            $q->where('in_stock',1);
        })->get();
    }
}
