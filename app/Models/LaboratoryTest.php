<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class LaboratoryTest extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['patient_id','test_type','price'];

    protected $appends = ['is_tested'];

    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    public function laboratory_test_items(): HasMany
    {
        return $this->hasMany(LaboratoryTestItem::class);
    }

    public function getIsTestedAttribute()
    {
        return LaboratoryTestItem::where('laboratory_test_id',$this->id)->exists();
    }
}
