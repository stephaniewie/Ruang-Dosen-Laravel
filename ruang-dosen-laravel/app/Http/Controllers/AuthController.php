<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;   
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Dosen;

class AuthController extends Controller
{
    public function showLogin()
    {
        return view('login');
    }

    public function login(Request $req)
    {
        $req->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $dosen = Dosen::where('email', $req->email)->first();
        // dd($dosen);
        //dd(Hash::make($req->password));

        //dd(Hash::check($req->password, bcrypt($dosen->password)));
        // dd(Hash::check($req->password, Hash::make($req->password)));
        if ($dosen && Hash::check($req->password, Hash::make($req->password))) {
            auth()->login($dosen);
            return redirect()->route('dashboard');
        }

        return back()->withErrors(['email' => 'Email atau password salah']);
    }

    public function logout()
    {
        auth()->logout();
        return redirect()->route('login');
    }
}


