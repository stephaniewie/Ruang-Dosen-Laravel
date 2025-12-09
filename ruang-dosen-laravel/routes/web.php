<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\JadwalController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\MateriKuliahController;

Route::get('/login', [AuthController::class,'showLogin'])->name('login');
Route::post('/login', [AuthController::class,'login']);
Route::post('/logout',[AuthController::class,'logout'])->name('logout');

Route::get('/dashboard', function () {
    return "Selamat datang di Dashboard!";
})->name('dashboard')->middleware('auth');

Route::middleware('auth')->group(function(){
    Route::get('/', [DashboardController::class,'index'])->name('dashboard');
    Route::get('/dashboard',[DashboardController::class,'index']);

    Route::get('/jadwal',[JadwalController::class,'index'])->name('jadwal.index') ->middleware('auth');

    Route::get('/mahasiswa',[MahasiswaController::class,'index'])->name('mahasiswa.index');

    Route::get('/materi',[MateriKuliahController::class,'index'])->name('materi.index');
    Route::get('/materi/create',[MateriKuliahController::class,'create'])->name('materi.create');
    Route::post('/materi',[MateriKuliahController::class,'store'])->name('materi.store');
});

