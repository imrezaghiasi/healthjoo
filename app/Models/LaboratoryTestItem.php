<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class LaboratoryTestItem extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['test_id','laboratory_test_id','result'];

    public function test(): BelongsTo
    {
        return $this->belongsTo(Test::class);
    }
    public function laboratory_test(): BelongsTo
    {
        return $this->belongsTo(LaboratoryTest::class);
    }
}
