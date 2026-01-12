<?php
// app/Http/Controllers/JadwalController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kelas;
use App\Models\Dosen;
use App\Models\MataKuliah;
use App\Models\RuangKuliah;

class JadwalController extends Controller
{
    public function index()
    {
        $kelas = Kelas::with(['dosen', 'mataKuliah'])->get();
        $jadwal = $this->groupByDay($kelas);
        
        return view('jadwal.index', compact('jadwal'));
    }

    private function groupByDay($kelas)
    {
        $days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        $jadwal = [];
        
        foreach ($days as $day) {
            $jadwal[$day] = $kelas->where('hari', $day)->sortBy('jam_mulai');
        }
        
        return $jadwal;
    }

    public function create()
    {
        $dosen = Dosen::all();
        $mataKuliah = MataKuliah::all();
        $ruangKuliah = RuangKuliah::where('status', 'tersedia')->get();
        
        return view('jadwal.create', compact('dosen', 'mataKuliah', 'ruangKuliah'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'dosen_id' => 'required|exists:dosen,id',
            'mata_kuliah_id' => 'required|exists:mata_kuliah,id',
            'hari' => 'required|in:Senin,Selasa,Rabu,Kamis,Jumat,Sabtu',
            'jam_mulai' => 'required',
            'jam_selesai' => 'required',
        ]);

        Kelas::create($request->all());

        return redirect()->route('jadwal.index')
            ->with('success', 'Jadwal berhasil ditambahkan!');
    }

    public function edit($id)
    {
        $kelas = Kelas::findOrFail($id);
        $dosen = Dosen::all();
        $mataKuliah = MataKuliah::all();
        $ruangKuliah = RuangKuliah::where('status', 'tersedia')->get();
        
        return view('jadwal.edit', compact('kelas', 'dosen', 'mataKuliah', 'ruangKuliah'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'dosen_id' => 'required|exists:dosen,id',
            'mata_kuliah_id' => 'required|exists:mata_kuliah,id',
            'hari' => 'required',
            'jam_mulai' => 'required',
            'jam_selesai' => 'required',
        ]);

        $kelas = Kelas::findOrFail($id);
        $kelas->update($request->all());

        return redirect()->route('jadwal.index')
            ->with('success', 'Jadwal berhasil diupdate!');
    }

    public function destroy($id)
    {
        $kelas = Kelas::findOrFail($id);
        $kelas->delete();

        return redirect()->route('jadwal.index')
            ->with('success', 'Jadwal berhasil dihapus!');
    }
}