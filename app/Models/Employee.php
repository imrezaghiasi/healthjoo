<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
        'email',
        'photo_path',
        'address',
        'salary',
        'job_id'
    ];

    public function job(): BelongsTo
    {
        return $this->belongsTo(Job::class);
    }
}
