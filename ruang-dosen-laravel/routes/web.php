<?php
// routes/web.php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\JadwalController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\MateriKuliahController;
use App\Http\Controllers\RuangKuliahController;
use App\Http\Controllers\NilaiController;

Route::get('/login', [AuthController::class,'showLogin'])->name('login');
Route::post('/login', [AuthController::class,'login']);
Route::post('/logout',[AuthController::class,'logout'])->name('logout');

Route::middleware('auth')->group(function(){
    // Dashboard
    Route::get('/', [DashboardController::class,'index'])->name('dashboard');
    Route::get('/dashboard',[DashboardController::class,'index']);

    // Jadwal Kuliah
    Route::resource('jadwal', JadwalController::class);

    // Mahasiswa
    Route::resource('mahasiswa', MahasiswaController::class);

    // Ruang Kuliah
    Route::resource('ruang', RuangKuliahController::class);

    // Nilai
    Route::resource('nilai', NilaiController::class);
    Route::get('/nilai/transkrip/{mahasiswaId}', [NilaiController::class, 'transkrip'])
        ->name('nilai.transkrip');

    // Materi Kuliah
    Route::get('/materi',[MateriKuliahController::class,'index'])->name('materi.index');
    Route::get('/materi/create',[MateriKuliahController::class,'create'])->name('materi.create');
    Route::post('/materi',[MateriKuliahController::class,'store'])->name('materi.store');
}); 