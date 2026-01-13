@extends('dashboard.index')

@section('content')
<div class="container mx-auto px-4 py-6">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Jadwal Kuliah</h1>
        <a href="{{ route('jadwal.create') }}" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
            + Tambah Jadwal
        </a>
    </div>

    @if(session('success'))
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {{ session('success') }}
        </div>
    @endif

    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        @foreach($jadwal as $hari => $kelasHari)
            <div class="border-b last:border-b-0">
                <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3">
                    <h2 class="text-xl font-semibold">{{ $hari }}</h2>
                </div>
                
                @if($kelasHari->count() > 0)
                    <div class="p-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            @foreach($kelasHari as $kelas)
                                <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                                    <div class="flex justify-between items-start mb-2">
                                        <h3 class="font-semibold text-lg text-gray-800">
                                            {{ $kelas->mataKuliah->nama ?? 'N/A' }}
                                        </h3>
                                        <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                            {{ $kelas->mataKuliah->sks ?? 0 }} SKS
                                        </span>
                                    </div>
                                    
                                    <div class="space-y-2 text-sm text-gray-600">
                                        <p><strong>Kode:</strong> {{ $kelas->mataKuliah->kode ?? '-' }}</p>
                                        <p><strong>Dosen:</strong> {{ $kelas->dosen->nama ?? 'N/A' }}</p>
                                        <p><strong>Waktu:</strong> {{ substr($kelas->jam_mulai, 0, 5) }} - {{ substr($kelas->jam_selesai, 0, 5) }}</p>
                                    </div>

                                    <div class="flex gap-2 mt-4">
                                        <a href="{{ route('jadwal.edit', $kelas->id) }}" 
                                           class="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white text-center py-2 rounded transition duration-300 text-sm">
                                            Edit
                                        </a>
                                        <form action="{{ route('jadwal.destroy', $kelas->id) }}" method="POST" class="flex-1">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" 
                                                    onclick="return confirm('Yakin ingin menghapus jadwal ini?')"
                                                    class="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition duration-300 text-sm">
                                                Hapus
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                @else
                    <div class="p-6 text-center text-gray-500">
                        Tidak ada jadwal untuk hari ini
                    </div>
                @endif
            </div>
        @endforeach
    </div>
</div>
@endsection