// Set tanggal pernikahan
const weddingDate = new Date('2024-01-01T08:00:00').getTime();

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
const personalGreeting = document.getElementById('personalGreeting');

function showGreeting(name) {
    personalGreeting.innerHTML = `Kepada Yth. Bapak/Ibu/Saudara/i <b>${name}</b><br>Dengan hormat, kami mengundang Anda untuk hadir di acara pernikahan kami.`;
}

// Cek jika nama sudah pernah diinput (localStorage)
window.addEventListener('DOMContentLoaded', function() {
    const savedName = localStorage.getItem('guestName');
    if (savedName) {
        nameOverlay.style.display = 'none';
        showGreeting(savedName);
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
        const mainContent = document.querySelector('.hero-invitation');
        
        // Sembunyikan konten utama terlebih dahulu
        mainContent.style.display = 'none';
        
        // Tampilkan nama tamu dan aktifkan animasi
        guestNameDisplay.textContent = guestName;
        undanganWrapper.style.display = 'flex';
        setTimeout(() => {
            undanganWrapper.classList.add('active');
        }, 100);
        
        // Simpan nama tamu untuk digunakan nanti
        localStorage.setItem('guestName', guestName);
        
        // Tampilkan greeting
        showGreeting(guestName);
    } else {
        alert('Mohon masukkan nama Anda');
    }
});

guestNameInput.addEventListener('input', function() {
    guestNameInput.style.borderColor = '#ccc';
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

const hero = document.querySelector('.hero');
const slides = [
  'images/slide1.jpg'
];
let slideIndex = 0;

function changeHeroBg() {
  hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('${slides[slideIndex]}')`;
  slideIndex = (slideIndex + 1) % slides.length;
}
changeHeroBg();
setInterval(changeHeroBg, 2000); // Ganti setiap 2 detik 

document.getElementById('bgVideo').src = 'video/bg.mp4';

const slidesBg = [
  'images/slide1.jpg'
];
let slideBgIndex = 0;
function changeBodyBg() {
  document.body.style.backgroundImage = `url('${slidesBg[slideBgIndex]}')`;
  slideBgIndex = (slideBgIndex + 1) % slidesBg.length;
}
changeBodyBg();
setInterval(changeBodyBg, 2000); // Ganti setiap 2 detik 

// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('2024-05-01T08:00:00').getTime(); // Sesuaikan dengan tanggal pernikahan
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "Acara telah dimulai!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Fungsi untuk membuka undangan
document.getElementById('btnBukaUndangan').addEventListener('click', function() {
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
        
        // Mulai musik
        const weddingMusic = document.getElementById('weddingMusic');
        weddingMusic.play().catch(error => {
            console.log("Autoplay prevented:", error);
        });
    }, 500);
});

// Cek apakah pengunjung sudah pernah mengisi nama
window.addEventListener('load', function() {
    const savedName = localStorage.getItem('guestName');
    if (savedName) {
        document.getElementById('nameOverlay').style.display = 'none';
        const undanganWrapper = document.getElementById('undanganWrapper');
        undanganWrapper.style.display = 'flex';
        setTimeout(() => {
            undanganWrapper.classList.add('active');
        }, 100);
        document.getElementById('guestNameDisplay').textContent = savedName;
        showGreeting(savedName);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // --- Elemen utama ---
    const nameOverlay = document.getElementById('nameOverlay');
    const guestNameInput = document.getElementById('guestNameInput');
    const submitGuestName = document.getElementById('submitGuestName');
    const undanganWrapper = document.getElementById('undanganWrapper');
    const guestNameDisplay = document.getElementById('guestNameDisplay');
    const btnBukaUndangan = document.getElementById('btnBukaUndangan');
    const mainContent = document.querySelector('.hero-invitation');
    const music = document.getElementById('weddingMusic');
    const musicControl = document.getElementById('musicControl');
    const musicIcon = document.getElementById('musicIcon');

    // --- Musik: Autoplay setelah interaksi pertama ---
    let isPlaying = false;
    function playMusic() {
        if (music) {
            music.play().then(() => {
                isPlaying = true;
                if (musicIcon) musicIcon.className = 'fa fa-music';
            }).catch(() => {
                isPlaying = false;
                if (musicIcon) musicIcon.className = 'fa fa-pause';
            });
        }
    }
    function pauseMusic() {
        if (music) {
            music.pause();
            isPlaying = false;
            if (musicIcon) musicIcon.className = 'fa fa-pause';
        }
    }
    if (musicControl) {
        musicControl.addEventListener('click', function(e) {
            e.stopPropagation();
            if (music.paused) {
                playMusic();
            } else {
                pauseMusic();
            }
        });
    }
    // Autoplay setelah interaksi pertama
    document.addEventListener('click', function initAudio() {
        playMusic();
        document.removeEventListener('click', initAudio);
    }, { once: true });
    if (music) {
        music.addEventListener('play', function() {
            isPlaying = true;
            if (musicIcon) musicIcon.className = 'fa fa-music';
        });
        music.addEventListener('pause', function() {
            isPlaying = false;
            if (musicIcon) musicIcon.className = 'fa fa-pause';
        });
    }

    // --- Fungsi tampilkan undangan box ---
    function showUndanganBox(name) {
        guestNameDisplay.textContent = name;
        nameOverlay.style.display = 'none';
        undanganWrapper.style.display = 'flex';
        setTimeout(() => {
            undanganWrapper.classList.add('active');
        }, 100);
    }

    // --- Submit nama ---
    submitGuestName.addEventListener('click', function() {
        const name = guestNameInput.value.trim();
        if (name.length < 2) {
            guestNameInput.style.borderColor = '#ff4444';
            guestNameInput.placeholder = 'Nama minimal 2 huruf!';
            guestNameInput.value = '';
            guestNameInput.focus();
            return;
        }
        localStorage.setItem('guestName', name);
        showUndanganBox(name);
    });
    guestNameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') submitGuestName.click();
    });
    guestNameInput.addEventListener('focus', function() {
        this.style.borderColor = '#e7d7c1';
        this.placeholder = 'Masukkan Nama Anda';
    });

    // --- Tombol buka undangan ---
    if (btnBukaUndangan) {
        btnBukaUndangan.addEventListener('click', function() {
            undanganWrapper.classList.remove('active');
            setTimeout(() => {
                undanganWrapper.style.display = 'none';
                mainContent.style.display = 'block';
                mainContent.style.opacity = '0';
                setTimeout(() => {
                    mainContent.style.opacity = '1';
                    mainContent.style.transition = 'opacity 1s ease';
                }, 100);
                document.body.style.overflow = 'auto';
                window.scrollTo({top: 0, behavior: 'smooth'});
            }, 500);
        });
    }

    // --- Cek nama tersimpan ---
    const savedName = localStorage.getItem('guestName');
    if (savedName && savedName.length >= 2) {
        showUndanganBox(savedName);
    } else {
        nameOverlay.style.display = 'flex';
    }

    // --- Countdown Timer ---
    function updateCountdown() {
        const weddingDate = new Date('2025-05-05T10:00:00').getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "Acara telah dimulai!";
        }
    }
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // --- RSVP Form ---
    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih atas konfirmasi kehadiran Anda!');
            rsvpForm.reset();
        });
    }

    // --- Galeri Modal ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentImageIndex = 0;
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    const modalContent = document.createElement('div');
    modalContent.className = 'gallery-modal-content';
    const modalImg = document.createElement('img');
    modalContent.appendChild(modalImg);
    const closeBtn = document.createElement('div');
    closeBtn.className = 'gallery-modal-close';
    closeBtn.innerHTML = '&times;';
    modalContent.appendChild(closeBtn);
    const navButtons = document.createElement('div');
    navButtons.className = 'gallery-modal-nav';
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '&#10094;';
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '&#10095;';
    navButtons.appendChild(prevBtn);
    navButtons.appendChild(nextBtn);
    modalContent.appendChild(navButtons);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            showModal(index);
        });
    });
    function showModal(index) {
        const img = galleryItems[index].querySelector('img');
        modalImg.src = img.src;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function hideModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        showModal(currentImageIndex);
    }
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        showModal(currentImageIndex);
    }
    closeBtn.addEventListener('click', hideModal);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        switch(e.key) {
            case 'Escape': hideModal(); break;
            case 'ArrowLeft': showPrevImage(); break;
            case 'ArrowRight': showNextImage(); break;
        }
    });

    // --- Smooth scroll untuk navigasi ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({behavior: 'smooth'});
            }
        });
    });

    // Direction button handling
    document.querySelectorAll('.direction-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const location = this.closest('.event-location').querySelector('p').textContent;
            alert('Membuka lokasi: ' + location);
        });
    });
});