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
    use HasFactory, SoftDeletes;

    protected $fillable = ['doctor_id', 'address', 'phone', 'start_day', 'end_day', 'start_hours', 'end_hours'];

    protected $appends = [
        'start_day_name',
        'end_day_name',
    ];

    public function getStartDayNameAttribute()
    {
        return Weekday::from($this->start_day)->getDescription();
    }

    public function getEndDayNameAttribute()
    {
        return Weekday::from($this->end_day)->getDescription();
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
