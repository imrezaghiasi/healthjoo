<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pharmacy extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['medicine_id','quantity','in_stock'];

    protected $table = 'pharmacy';

    public function medicine(): BelongsTo
    {
        return $this->belongsTo(Medicine::class);
    }

    public function pharmacy_operations(): HasMany
    {
        return $this->hasMany(PharmacyOperation::class);
    }
}
