<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Appointment extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['doctor_id','is_reserved','is_expired','started_at'];
    protected $appends = ['date_started_at','time_started_at'];

    public function getDateStartedAtAttribute()
    {
        $timestamp = $this->started_at;
        return Carbon::parse($timestamp)->toDateString();
    }
    public function getTimeStartedAtAttribute(){
        $timestamp = $this->started_at;
        return Carbon::parse($timestamp)->format('H:i:s');
    }

    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    public function requestAppointments(): HasMany
    {
        return $this->hasMany(RequestAppointment::class);
    }


}
