<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('request_appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreignId('patient_id')->references('id')->on('patients')->cascadeOnDelete();
            $table->foreignId('appointment_id')->references('id')->on('appointments')->cascadeOnDelete();
            $table->foreignId('disease_id')->references('id')->on('diseases')->cascadeOnDelete();
            $table->boolean('is_canceled')->default(0);
            $table->boolean('is_referred')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('request_appointments');
    }
};
