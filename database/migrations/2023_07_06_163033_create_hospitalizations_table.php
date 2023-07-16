<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hospitalizations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->references('id')->on('patients')->noActionOnDelete();
            $table->foreignId('room_id')->references('id')->on('rooms')->noActionOnDelete();
            $table->foreignId('doctor_id')->references('id')->on('doctors')->noActionOnDelete();
            $table->foreignId('bed_id')->references('id')->on('beds')->noActionOnDelete();
            $table->string('disease');
            $table->timestamp('started_at');
            $table->timestamp('finished_at')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hospitalizations');
    }
};
