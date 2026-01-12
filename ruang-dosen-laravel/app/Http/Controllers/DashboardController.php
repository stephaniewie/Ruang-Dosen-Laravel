<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // Pastikan view dashboard.index ada
        return view('dashboard.index');
    }
}