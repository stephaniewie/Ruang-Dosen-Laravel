<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class Dosen extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'dosen';

    protected $fillable = [
        'nama',
        'email',
        'password'
    ];

    protected $hidden = [
        'password'
    ];
}
