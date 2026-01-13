<?php

namespace App\Http\Controllers;
use App\Http\Controllers\MahasiswaController;
use App\Models\Mahasiswa;
use Illuminate\Http\Request;

class MahasiswaController extends Controller
{
    public function index()
    {
        $mahasiswa = Mahasiswa::all();
    }
      public function create()
    {
        return view('Mahasiswa.index', compact('mahasiswa'));
    }
}
