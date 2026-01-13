@extends('layouts.app')

@section('content')
<div class="container py-4">

    <!-- Header -->
    <div class="mb-4">
        <h3 class="fw-bold">📚 Materi Kuliah</h3>
        <p class="text-muted mb-0">
            Kelola dan upload materi perkuliahan untuk mahasiswa Anda
        </p>
    </div>

    <div class="row">
        <!-- Form Upload Materi -->
        <div class="col-md-5">
            <div class="card shadow-sm rounded-4 mb-4">
                <div class="card-header bg-white fw-semibold">
                    Tambah Materi
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Mata Kuliah</label>
                            <input type="text" class="form-control" placeholder="Contoh: Sistem Informasi">
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Judul Materi</label>
                            <input type="text" class="form-control" placeholder="Pertemuan 1 - Pengantar">
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Deskripsi</label>
                            <textarea class="form-control" rows="3" placeholder="Deskripsi singkat materi"></textarea>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">File Materi</label>
                            <input type="file" class="form-control">
                            <small class="text-muted">
                                Format: PDF, PPT, DOC
                            </small>
                        </div>

                        <button class="btn btn-primary w-100">
                            Upload Materi
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- List Materi -->
        <div class="col-md-7">
            <div class="card shadow-sm rounded-4">
                <div class="card-header bg-white fw-semibold">
                    Daftar Materi Kuliah
                </div>
                <div class="card-body p-0">
                    <table class="table table-hover mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>No</th>
                                <th>Mata Kuliah</th>
                                <th>Judul Materi</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Dummy Data -->
                            <tr>
                                <td>1</td>
                                <td>Sistem Informasi</td>
                                <td>Pengenalan Sistem</td>
                                <td>
                                    <button class="btn btn-sm btn-outline-primary">Lihat</button>
                                    <button class="btn btn-sm btn-outline-danger">Hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Basis Data</td>
                                <td>Normalisasi</td>
                                <td>
                                    <button class="btn btn-sm btn-outline-primary">Lihat</button>
                                    <button class="btn btn-sm btn-outline-danger">Hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Pemrograman Web</td>
                                <td>Laravel Dasar</td>
                                <td>
                                    <button class="btn btn-sm btn-outline-primary">Lihat</button>
                                    <button class="btn btn-sm btn-outline-danger">Hapus</button>
                                </td>
                            </tr>
                            <!-- End Dummy -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</div>
@endsection
