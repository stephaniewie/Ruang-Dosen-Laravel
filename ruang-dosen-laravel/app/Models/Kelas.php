<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    protected $fillable = ['dosen_id','mata_kuliah_id','hari','jam_mulai','jam_selesai'];

    public function dosen() { return $this->belongsTo(Dosen::class); }
    public function mataKuliah() { return $this->belongsTo(MataKuliah::class, 'mata_kuliah_id'); }
    public function materi() { return $this->hasMany(MateriKuliah::class); }
}
