<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MateriKuliah extends Model
{
    protected $fillable = ['kelas_id','judul','deskripsi','file_path'];
    public function kelas() { return $this->belongsTo(Kelas::class); }
}

