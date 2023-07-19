<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Test extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['test_name','unit','normal_range'];

    public function laboratory_test_items(): HasMany
    {
        return $this->hasMany(LaboratoryTestItem::class);
    }
}
