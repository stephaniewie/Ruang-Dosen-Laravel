@extends('dashboard.index')

@section('content')
<div class="container mx-auto px-4 py-6">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Data Ruang Kuliah</h1>
        <a href="{{ route('ruang.create') }}" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
            + Tambah Ruang
        </a>
    </div>

    @if(session('success'))
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {{ session('success') }}
        </div>
    @endif

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @forelse($ruangKuliah as $ruang)
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-xl font-bold text-gray-800">{{ $ruang->kode_ruang }}</h3>
                        <p class="text-gray-600">{{ $ruang->nama_ruang }}</p>
                    </div>
                    <span class="px-3 py-1 rounded-full text-xs font-semibold
                        @if($ruang->status == 'tersedia') bg-green-100 text-green-800
                        @elseif($ruang->status == 'terpakai') bg-yellow-100 text-yellow-800
                        @else bg-red-100 text-red-800
                        @endif">
                        {{ ucfirst($ruang->status) }}
                    </span>
                </div>

                <div class="space-y-2 text-sm text-gray-600 mb-4">
                    <p><strong>Gedung:</strong> {{ $ruang->gedung }}</p>
                    <p><strong>Kapasitas:</strong> {{ $ruang->kapasitas }} orang</p>
                    @if($ruang->fasilitas)
                        <p><strong>Fasilitas:</strong> {{ $ruang->fasilitas }}</p>
                    @endif
                </div>

                <div class="flex gap-2">
                    <a href="{{ route('ruang.edit', $ruang->id) }}" 
                       class="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white text-center py-2 rounded transition duration-300">
                        Edit
                    </a>
                    <form action="{{ route('ruang.destroy', $ruang->id) }}" method="POST" class="flex-1">
                        @csrf
                        @method('DELETE')
                        <button type="submit" 
                                onclick="return confirm('Yakin ingin menghapus ruang ini?')"
                                class="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition duration-300">
                            Hapus
                        </button>
                    </form>
                </div>
            </div>
        @empty
            <div class="col-span-3 text-center text-gray-500 py-8">
                Belum ada data ruang kuliah
            </div>
        @endforelse
    </div>

    <div class="mt-6">
        {{ $ruangKuliah->links() }}
    </div>
</div>
@endsection