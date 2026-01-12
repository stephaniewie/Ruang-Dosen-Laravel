<?php

namespace App\Http\Controllers;
use App\Http\Controllers\MahasiswaController;
use Illuminate\Http\Request;

class MahasiswaController extends Controller
{
    public function index()
    {
        return view('mahasiswa.index');
    }
      public function create()
    {
        return view('mahasiswa.create');
    }
}
