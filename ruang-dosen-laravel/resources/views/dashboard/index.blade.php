<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Dashboard - Ruang Dosen IBI Kwik Kian Gie</title>

    <link rel="icon" type="image/png" sizes="32x32"
      href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqNDsRltXOVfCdtCt8bFyn9IJKZ109sGOuHX8ewHwSLZbew50bGEInBAHWIdv6RnYS4pjJCbY80sRMCcoszpM1Tt8PJ6NrgXUv-AK3TabWvpuv8DfYnmW9M5sY41bYBGPzkNTTe_Y6PJU/s600/Institut_Bisnis_Dan_Informatika_Kwik_Kian_Gie.png"
    >

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <style>
      @import url("https://fonts.googleapis.com/css?family=Lexend+Deca:300,500,400,600|DM+Sans:700|Inter:500,400");
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Inter', sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        padding: 20px;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .header {
        background: white;
        border-radius: 15px;
        padding: 20px 30px;
        margin-bottom: 20px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .header h1 {
        color: #333;
        font-size: 24px;
      }
      
      .user-info {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      
      .user-info span {
        color: #666;
        font-weight: 500;
      }
      
      .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        text-decoration: none;
        display: inline-block;
        transition: all 0.3s;
      }
      
      .btn-logout {
        background: #ef4444;
        color: white;
      }
      
      .btn-logout:hover {
        background: #dc2626;
        transform: translateY(-2px);
      }
      
      .welcome-card {
        background: white;
        border-radius: 15px;
        padding: 40px;
        margin-bottom: 20px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        text-align: center;
      }
      
      .welcome-card h2 {
        color: #667eea;
        font-size: 32px;
        margin-bottom: 10px;
      }
      
      .welcome-card p {
        color: #666;
        font-size: 16px;
      }
      
      .menu-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }
      
      .menu-card {
        background: white;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        transition: all 0.3s;
        text-align: center;
        text-decoration: none;
        color: inherit;
      }
      
      .menu-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0,0,0,0.15);
      }
      
      .menu-card .icon {
        font-size: 48px;
        margin-bottom: 15px;
      }
      
      .menu-card h3 {
        color: #333;
        margin-bottom: 10px;
        font-size: 20px;
      }
      
      .menu-card p {
        color: #666;
        font-size: 14px;
      }
      
      .card-jadwal { border-top: 4px solid #3b82f6; }
      .card-mahasiswa { border-top: 4px solid #10b981; }
      .card-materi { border-top: 4px solid #f59e0b; }
      .card-nilai { border-top: 4px solid #8b5cf6; }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>🎓 Ruang Dosen IBI Kwik Kian Gie</h1>
            <div class="user-info">
                <span>👤 {{ auth()->user()->nama }}</span>
                <form action="{{ route('logout') }}" method="POST" style="display: inline;">
                    @csrf
                    <button type="submit" class="btn btn-logout">Logout</button>
                </form>
            </div>
        </div>

        <!-- Welcome Card -->
        <div class="welcome-card">
            <h2>Selamat Datang, {{ auth()->user()->nama }}! 👋</h2>
            <p>Selamat datang di sistem manajemen ruang dosen. Kelola jadwal, mahasiswa, dan materi kuliah Anda dengan mudah.</p>
        </div>

        <!-- Menu Grid -->
        <div class="menu-grid">
            <a href="{{ route('jadwal.index') }}" class="menu-card card-jadwal">
                <div class="icon">📅</div>
                <h3>Jadwal Kuliah</h3>
                <p>Lihat dan kelola jadwal mengajar Anda</p>
            </a>

            <a href="{{ route('mahasiswa.index') }}" class="menu-card card-mahasiswa">
                <div class="icon">👨‍🎓</div>
                <h3>Data Mahasiswa</h3>
                <p>Kelola data mahasiswa yang Anda ajar</p>
            </a>

            <a href="{{ route('materi.index') }}" class="menu-card card-materi">
                <div class="icon">📚</div>
                <h3>Materi Kuliah</h3>
                <p>Upload dan kelola materi perkuliahan</p>
            </a>

            <div class="menu-card card-nilai">
                <div class="icon">📊</div>
                <h3>Nilai Mahasiswa</h3>
                <p>Input dan kelola nilai mahasiswa</p>
            </div>
        </div>
    </div>
</body>
</html>