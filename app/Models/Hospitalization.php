<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Hospitalization extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['patient_id','room_id','doctor_id','disease','date_of_hospitalization','start_time','end_time'];

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
}
