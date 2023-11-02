<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Disease extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['name'];

    public function hospitalization(): HasMany
    {
        return $this->hasMany(Hospitalization::class);
    }

    public function requestAppointments(): HasMany
    {
        return $this->hasMany(RequestAppointment::class);
    }
}
