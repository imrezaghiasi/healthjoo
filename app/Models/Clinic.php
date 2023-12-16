<?php

namespace App\Models;

use App\Enums\Weekday;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Clinic extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable  = ['doctor_id', 'address','phone','start_day','end_day','start_hours','end_hours',];

    protected $casts = [
        'start_day' => 'integer',
        'end_day' => 'integer',
    ];

    // Accessor for start_day
    public function getStartDayAttribute($value)
    {
        return Weekday::from($value)->getDescription();
    }

    // Accessor for end_day
    public function getEndDayAttribute($value)
    {
        return Weekday::from($value)->getDescription();
    }

    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }
}
