@extends('dashboard.index')

@section('content')
<div class="container mx-auto px-4 py-6">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Data Nilai Mahasiswa</h1>
        <a href="{{ route('nilai.create') }}" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
            + Input Nilai
        </a>
    </div>

    @if(session('success'))
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {{ session('success') }}
        </div>
    @endif

    <div class="bg-white rounded-lg shadow-lg overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">No</th>
                    <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">NIM</th>
                    <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nama Mahasiswa</th>
                    <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Mata Kuliah</th>
                    <th class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Tugas</th>
                    <th class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">UTS</th>
                    <th class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">UAS</th>
                    <th class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Nilai Akhir</th>
                    <th class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Grade</th>
                    <th class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Status</th>
                    <th class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Aksi</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @forelse($nilai as $index => $n)
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {{ $nilai->firstItem() + $index }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ $n->mahasiswa->nim ?? 'N/A' }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {{ $n->mahasiswa->nama ?? 'N/A' }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {{ $n->kelas->mataKuliah->nama ?? 'N/A' }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                            {{ $n->nilai_tugas ?? '-' }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                            {{ $n->nilai_uts ?? '-' }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                            {{ $n->nilai_uas ?? '-' }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-bold text-gray-900">
                            {{ number_format($n->nilai_akhir, 2) }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <span class="px-3 py-1 rounded-full text-xs font-semibold
                                @if($n->nilai_huruf == 'A' || $n->nilai_huruf == 'A-') bg-green-100 text-green-800
                                @elseif($n->nilai_huruf == 'B+' || $n->nilai_huruf == 'B' || $n->nilai_huruf == 'B-') bg-blue-100 text-blue-800
                                @elseif($n->nilai_huruf == 'C+' || $n->nilai_huruf == 'C') bg-yellow-100 text-yellow-800
                                @else bg-red-100 text-red-800
                                @endif">
                                {{ $n->nilai_huruf }}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <span class="px-3 py-1 rounded-full text-xs font-semibold
                                @if($n->status == 'lulus') bg-green-100 text-green-800
                                @elseif($n->status == 'tidak lulus') bg-red-100 text-red-800
                                @else bg-gray-100 text-gray-800
                                @endif">
                                {{ ucfirst($n->status) }}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                            <div class="flex justify-center gap-2">
                                <a href="{{ route('nilai.edit', $n->id) }}" 
                                   class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition duration-300">
                                    Edit
                                </a>
                                <form action="{{ route('nilai.destroy', $n->id) }}" method="POST" class="inline">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" 
                                            onclick="return confirm('Yakin ingin menghapus nilai ini?')"
                                            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-300">
                                        Hapus
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="11" class="px-6 py-4 text-center text-gray-500">
                            Belum ada data nilai
                        </td>
                    </tr>
                @endforelse
            </tbody>
        </table>
        
        <div class="px-6 py-4 bg-gray-50">
            {{ $nilai->links() }}
        </div>
    </div>
</div>
@endsection