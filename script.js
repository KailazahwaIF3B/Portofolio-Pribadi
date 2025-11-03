// Fungsi untuk mengganti Tema Terang/Gelap
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Simpan preferensi tema ke Local Storage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Fungsi untuk mengontrol pemutar audio
function handleAudioControl() {
    const audio = document.getElementById('musik');
    const playBtn = document.getElementById('playBtn');

    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸️ Jeda Musik';
    } else {
        audio.pause();
        playBtn.textContent = '▶️ Putar Lagu Rizky Febian';
    }
    // Reset tombol saat lagu selesai
    audio.onended = () => {
        playBtn.textContent = '▶️ Putar Lagu Rizky Febian';
    };
}

// Fungsi untuk kembali ke atas halaman
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Fungsi untuk menampilkan pesan sambutan (Sesuai dengan modul JavaScript)
function showWelcomeMessage(name) {
    alert(`Selamat datang di Portofolio Pribadi ${name}! Saya adalah seorang mahasiswa Teknik Informatika yang tertarik pada web development.`);
}

// Menjalankan semua fungsi utama saat halaman dimuat (window.onload)
window.onload = function() {
    // 1. Ambil nama dari elemen H1
    const userNameElement = document.querySelector('h1.text-center');
    const userName = userNameElement ? userNameElement.textContent.replace('Portofolio Pribadi', '').trim() : "Kaila Zahwa";

    // Panggil pesan sambutan
    showWelcomeMessage(userName);

    // 2. Pasang Event Listeners
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('playBtn').addEventListener('click', handleAudioControl);
    document.getElementById('scrollTop').addEventListener('click', scrollToTop);

    // 3. Muat preferensi tema dari Local Storage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
};