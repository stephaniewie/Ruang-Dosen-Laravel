<?php
// app/Models/Nilai.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Nilai extends Model
{
    protected $table = 'nilai';
    
    protected $fillable = [
        'mahasiswa_id',
        'kelas_id',
        'nilai_tugas',
        'nilai_uts',
        'nilai_uas',
        'nilai_akhir',
        'nilai_huruf',
        'status'
    ];

    public function mahasiswa()
    {
        return $this->belongsTo(Mahasiswa::class);
    }

    public function kelas()
    {
        return $this->belongsTo(Kelas::class);
    }

    // Hitung nilai akhir otomatis
    public function hitungNilaiAkhir()
    {
        $tugas = $this->nilai_tugas ?? 0;
        $uts = $this->nilai_uts ?? 0;
        $uas = $this->nilai_uas ?? 0;
        
        $nilaiAkhir = ($tugas * 0.3) + ($uts * 0.3) + ($uas * 0.4);
        
        $this->nilai_akhir = $nilaiAkhir;
        $this->nilai_huruf = $this->konversiNilaiHuruf($nilaiAkhir);
        $this->status = $nilaiAkhir >= 60 ? 'lulus' : 'tidak lulus';
        
        return $this;
    }

    private function konversiNilaiHuruf($nilai)
    {
        if ($nilai >= 85) return 'A';
        if ($nilai >= 80) return 'A-';
        if ($nilai >= 75) return 'B+';
        if ($nilai >= 70) return 'B';
        if ($nilai >= 65) return 'B-';
        if ($nilai >= 60) return 'C+';
        if ($nilai >= 55) return 'C';
        if ($nilai >= 50) return 'D';
        return 'E';
    }
}