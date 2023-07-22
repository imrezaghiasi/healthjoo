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
        Schema::create('pharmacy_operations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pharmacy_id')->references('id')->on('pharmacy')->noActionOnDelete();
            $table->foreignId('order_id')->references('id')->on('orders')->noActionOnDelete();
            $table->boolean('operation');
            $table->integer('count');
            $table->text('description');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pharmacy_operations');
    }
};
