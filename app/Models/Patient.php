<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['first_name','last_name','mobile','national_code','address','gender','date_of_birth','blood_group','photo_path'];

}
