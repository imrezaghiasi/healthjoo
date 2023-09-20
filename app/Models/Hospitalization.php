<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Hospitalization extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['patient_id','room_id','doctor_id','bed_id','disease','started_at','finished_at'];

    protected $appends = ['date_started_at','time_started_at'];
    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }
    public function room(): BelongsTo
    {
        return $this->belongsTo(Room::class);
    }
    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    public function bed(): BelongsTo
    {
        return $this->belongsTo(Bed::class);
    }

    public function getDateStartedAtAttribute()
    {
        $timestamp = $this->started_at;
        return Carbon::parse($timestamp)->toDateString();
    }
    public function getTimeStartedAtAttribute(){
        $timestamp = $this->started_at;
        return Carbon::parse($timestamp)->format('H:i:s');
    }

}
