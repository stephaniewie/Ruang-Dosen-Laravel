<?php
// app/Http/Controllers/NilaiController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nilai;
use App\Models\Mahasiswa;
use App\Models\Kelas;

class NilaiController extends Controller
{
    public function index()
    {
        $nilai = Nilai::with(['mahasiswa', 'kelas.mataKuliah'])->latest()->paginate(15);
        return view('nilai.index', compact('nilai'));
    }

    public function create()
    {
        $mahasiswa = Mahasiswa::all();
        $kelas = Kelas::with('mataKuliah')->get();
        return view('nilai.create', compact('mahasiswa', 'kelas'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'mahasiswa_id' => 'required|exists:mahasiswa,id',
            'kelas_id' => 'required|exists:kelas,id',
            'nilai_tugas' => 'nullable|numeric|min:0|max:100',
            'nilai_uts' => 'nullable|numeric|min:0|max:100',
            'nilai_uas' => 'nullable|numeric|min:0|max:100',
        ]);

        $nilai = new Nilai($request->all());
        $nilai->hitungNilaiAkhir();
        $nilai->save();

        return redirect()->route('nilai.index')
            ->with('success', 'Nilai berhasil ditambahkan!');
    }

    public function edit($id)
    {
        $nilai = Nilai::findOrFail($id);
        $mahasiswa = Mahasiswa::all();
        $kelas = Kelas::with('mataKuliah')->get();
        
        return view('nilai.edit', compact('nilai', 'mahasiswa', 'kelas'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'mahasiswa_id' => 'required|exists:mahasiswa,id',
            'kelas_id' => 'required|exists:kelas,id',
            'nilai_tugas' => 'nullable|numeric|min:0|max:100',
            'nilai_uts' => 'nullable|numeric|min:0|max:100',
            'nilai_uas' => 'nullable|numeric|min:0|max:100',
        ]);

        $nilai = Nilai::findOrFail($id);
        $nilai->fill($request->all());
        $nilai->hitungNilaiAkhir();
        $nilai->save();

        return redirect()->route('nilai.index')
            ->with('success', 'Nilai berhasil diupdate!');
    }

    public function destroy($id)
    {
        $nilai = Nilai::findOrFail($id);
        $nilai->delete();

        return redirect()->route('nilai.index')
            ->with('success', 'Nilai berhasil dihapus!');
    }

    // Cetak transkrip mahasiswa
    public function transkrip($mahasiswaId)
    {
        $mahasiswa = Mahasiswa::with(['nilai.kelas.mataKuliah'])->findOrFail($mahasiswaId);
        return view('nilai.transkrip', compact('mahasiswa'));
    }
}