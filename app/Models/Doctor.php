<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;

class Doctor extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['first_name','last_name','national_code','date_of_birth','gender','email','mobile','address','specialization','photo_path'];

}
