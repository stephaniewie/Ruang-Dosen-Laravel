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
    Route::get('/jadwal', function () {
    return view('Jadwal.index');
})->name('jadwal.index');

    // Mahasiswa
    Route::get('/mahasiswa', [MahasiswaController::class, 'index']);
    Route::get('/mahasiswa', function () {
    return view('Mahasiswa.index');
})->name('mahasiswa.index');

    // Ruang Kuliah
    Route::resource('ruang', RuangKuliahController::class);

    // Nilai
    Route::get('/nilai', function () {
    return view('nilai.index');
})->name('nilai.index');

    // Materi Kuliah
    Route::get('/materi', function () {
    return view('materi.index');
})->name('materi.index');
}); 