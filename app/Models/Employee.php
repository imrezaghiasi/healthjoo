<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Employee extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'first_name',
        'last_name',
        'gender',
        'national_code',
        'phone',
        'photo_path',
        'email',
        'address',
        'salary',
        'date_of_birth',
        'job_id'
    ];

    public function job(): BelongsTo
    {
        return $this->belongsTo(Job::class);
    }
}
