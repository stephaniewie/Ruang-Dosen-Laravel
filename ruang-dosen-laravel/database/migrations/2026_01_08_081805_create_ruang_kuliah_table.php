<?php
// database/migrations/xxxx_xx_xx_create_ruang_kuliah_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('ruang_kuliah', function (Blueprint $table) {
            $table->id();
            $table->string('kode_ruang')->unique();
            $table->string('nama_ruang');
            $table->string('gedung');
            $table->integer('kapasitas');
            $table->enum('status', ['tersedia', 'terpakai', 'maintenance'])->default('tersedia');
            $table->text('fasilitas')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ruang_kuliah');
    }
};