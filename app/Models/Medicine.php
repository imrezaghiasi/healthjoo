<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Medicine extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['title','price','code'];

    public function pharmacy(): HasOne
    {
        return $this->hasOne(Pharmacy::class);
    }

    public function order_items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}
