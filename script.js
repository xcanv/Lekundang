// Set tanggal pernikahan
const weddingDate = new Date('2025-05-05T10:00:00').getTime();

// Update countdown setiap detik
const countdown = setInterval(function() {
    // Dapatkan waktu sekarang
    const now = new Date().getTime();
    
    // Hitung selisih waktu
    const distance = weddingDate - now;
    
    // Hitung waktu untuk hari, jam, menit, dan detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Tampilkan hasil
    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
    
    // Jika countdown selesai
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "Acara telah dimulai!";
    }
}, 1000);

// Handle form RSVP
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil nilai form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;
    const message = document.getElementById('message').value;
    
    // Di sini Anda bisa menambahkan kode untuk mengirim data ke server
    // Contoh menggunakan alert untuk demo
    alert(`Terima kasih ${name} atas konfirmasi kehadiran Anda!`);
    
    // Reset form
    this.reset();
});

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Overlay Input Nama Tamu
const nameOverlay = document.getElementById('nameOverlay');
const guestNameInput = document.getElementById('guestNameInput');
const submitGuestName = document.getElementById('submitGuestName');

// Cek jika nama sudah pernah diinput (localStorage)
window.addEventListener('DOMContentLoaded', function() {
    const savedName = localStorage.getItem('guestName');
    if (savedName) {
        nameOverlay.style.display = 'none';
        const undanganWrapper = document.getElementById('undanganWrapper');
        undanganWrapper.style.display = 'flex';
        setTimeout(() => {
            undanganWrapper.classList.add('active');
        }, 100);
        document.getElementById('guestNameDisplay').textContent = savedName;
    } else {
        nameOverlay.style.display = 'flex';
    }
});

submitGuestName.addEventListener('click', function() {
    const guestName = document.getElementById('guestNameInput').value.trim();
    if (guestName) {
        // Sembunyikan overlay input nama
        document.getElementById('nameOverlay').style.display = 'none';
        
        // Tampilkan undangan box dengan animasi
        const undanganWrapper = document.getElementById('undanganWrapper');
        const guestNameDisplay = document.getElementById('guestNameDisplay');
        
        // Tampilkan nama tamu dan aktifkan animasi
        guestNameDisplay.textContent = guestName;
        undanganWrapper.style.display = 'flex';
        setTimeout(() => {
            undanganWrapper.classList.add('active');
        }, 100);
        
        // Simpan nama tamu untuk digunakan nanti
        localStorage.setItem('guestName', guestName);
    } else {
        alert('Mohon masukkan nama Anda');
    }
});

guestNameInput.addEventListener('input', function() {
    guestNameInput.style.borderColor = '#ccc';
});

// Fungsi untuk mengelola musik
document.addEventListener('DOMContentLoaded', function() {
    const weddingMusic = document.getElementById('weddingMusic');
    const musicControl = document.getElementById('musicControl');
    const musicIcon = document.getElementById('musicIcon');
    let isPlaying = false;

    // Fungsi untuk memulai musik
    function playMusic() {
        if (weddingMusic) {
            weddingMusic.volume = 1;
            weddingMusic.muted = false;
            const playPromise = weddingMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isPlaying = true;
                    if (musicIcon) musicIcon.className = 'fa fa-music';
                }).catch(error => {
                    console.log("Autoplay prevented:", error);
                    isPlaying = false;
                    if (musicIcon) musicIcon.className = 'fa fa-pause';
                });
            }
        }
    }

    // Fungsi untuk menghentikan musik
    function pauseMusic() {
        if (weddingMusic) {
            weddingMusic.pause();
            isPlaying = false;
            if (musicIcon) musicIcon.className = 'fa fa-pause';
        }
    }

    // Event listener untuk tombol kontrol musik
    if (musicControl) {
        musicControl.addEventListener('click', function(e) {
            e.stopPropagation();
            if (isPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }
        });
    }

    // Coba putar musik saat halaman dimuat
    playMusic();

    // Coba putar musik saat ada interaksi pengguna
    document.addEventListener('click', function initAudio() {
        playMusic();
    });

    // Coba putar musik saat undangan dibuka
    const btnBukaUndangan = document.getElementById('btnBukaUndangan');
    if (btnBukaUndangan) {
        btnBukaUndangan.addEventListener('click', function() {
            const undanganWrapper = document.getElementById('undanganWrapper');
            const mainContent = document.querySelector('.hero-invitation');
            
            // Animasi fade out untuk undangan box
            undanganWrapper.classList.remove('active');
            
            setTimeout(() => {
                undanganWrapper.style.display = 'none';
                
                // Tampilkan konten utama dengan animasi
                mainContent.style.display = 'block';
                mainContent.style.opacity = '0';
                
                setTimeout(() => {
                    mainContent.style.opacity = '1';
                    mainContent.style.transition = 'opacity 1s ease';
                }, 100);
                
                // Mulai musik saat undangan dibuka
                playMusic();
            }, 500);
        });
    }

    // Event listener untuk status musik
    if (weddingMusic) {
        weddingMusic.addEventListener('play', function() {
            isPlaying = true;
            if (musicIcon) musicIcon.className = 'fa fa-music';
        });

        weddingMusic.addEventListener('pause', function() {
            isPlaying = false;
            if (musicIcon) musicIcon.className = 'fa fa-pause';
        });

        weddingMusic.addEventListener('ended', function() {
            weddingMusic.currentTime = 0;
            playMusic();
        });
    }
});

// Animasi Galeri saat muncul di viewport
function animateGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const triggerBottom = window.innerHeight * 0.95;
    galleryItems.forEach(item => {
        const boxTop = item.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
}
window.addEventListener('scroll', animateGallery);
window.addEventListener('DOMContentLoaded', animateGallery);

// Set video background
document.getElementById('bgVideo').src = 'video/bg.mp4';