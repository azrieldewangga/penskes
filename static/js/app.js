// ===== MITRA KELUARGA MVP - JavaScript =====

document.addEventListener('DOMContentLoaded', function () {

    // ===== MOBILE MENU TOGGLE =====
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function () {
            navList.classList.toggle('open');
            menuToggle.textContent = navList.classList.contains('open') ? '✕' : '☰';
        });
    }

    // ===== HERO SLIDER =====
    const heroSlider = document.getElementById('heroSlider');
    const heroDots = document.querySelectorAll('.hero-dot');

    if (heroSlider && heroDots.length > 0) {
        let currentSlide = 0;
        const totalSlides = heroDots.length;

        function goToSlide(index) {
            currentSlide = index;
            heroSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
            heroDots.forEach(function (dot, i) {
                dot.classList.toggle('active', i === currentSlide);
            });
        }

        heroDots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                goToSlide(parseInt(this.dataset.slide));
            });
        });

        // Auto-slide every 5 seconds
        setInterval(function () {
            goToSlide((currentSlide + 1) % totalSlides);
        }, 5000);
    }

    // ===== SEARCH FUNCTIONALITY =====
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                var query = this.value.trim();
                if (query) {
                    alert('Mencari: "' + query + '"\n\nFitur pencarian lengkap akan segera hadir.');
                }
            }
        });
    }

    // ===== DOCTOR DATA =====
    var doctors = [
        { name: 'Dr. Ahmad Fauzi, Sp.PD', spec: 'Penyakit Dalam', category: 'penyakit-dalam', location: 'MK Kelapa Gading', schedule: 'Senin, Rabu, Jumat | 08:00 - 14:00', initials: 'AF' },
        { name: 'Dr. Siti Nurhaliza, Sp.A', spec: 'Anak', category: 'anak', location: 'MK Bekasi Timur', schedule: 'Selasa, Kamis | 09:00 - 15:00', initials: 'SN' },
        { name: 'Dr. Budi Santoso, Sp.JP', spec: 'Jantung & Pembuluh Darah', category: 'jantung', location: 'MK Kemayoran', schedule: 'Senin - Jumat | 10:00 - 16:00', initials: 'BS' },
        { name: 'Dr. Kartika Dewi, Sp.OG', spec: 'Kebidanan & Kandungan', category: 'kandungan', location: 'MK Depok', schedule: 'Senin, Rabu, Sabtu | 08:00 - 12:00', initials: 'KD' },
        { name: 'Dr. Reza Pratama, Sp.B', spec: 'Bedah Umum', category: 'bedah', location: 'MK Bintaro', schedule: 'Selasa, Rabu, Jumat | 10:00 - 15:00', initials: 'RP' },
        { name: 'Dr. Lina Maryati, Sp.M', spec: 'Mata', category: 'mata', location: 'MK Cibubur', schedule: 'Senin - Kamis | 09:00 - 14:00', initials: 'LM' },
        { name: 'Dr. Hendra Wijaya, Sp.P', spec: 'Paru & Pernapasan', category: 'paru', location: 'MK Surabaya', schedule: 'Senin, Rabu | 08:00 - 13:00', initials: 'HW' },
        { name: 'Dr. Nurul Aini, Sp.KK', spec: 'Kulit & Kelamin', category: 'kulit', location: 'MK Kelapa Gading', schedule: 'Selasa, Kamis | 10:00 - 15:00', initials: 'NA' },
        { name: 'Dr. Agus Setiawan, Sp.N', spec: 'Saraf', category: 'saraf', location: 'MK Bekasi Timur', schedule: 'Senin - Jumat | 08:00 - 14:00', initials: 'AS' },
        { name: 'Dr. Maya Puspita, Sp.THT', spec: 'THT', category: 'tht', location: 'MK Kemayoran', schedule: 'Senin, Rabu, Jumat | 09:00 - 14:00', initials: 'MP' },
        { name: 'drg. Indah Permata', spec: 'Gigi', category: 'gigi', location: 'MK Depok', schedule: 'Selasa, Kamis, Sabtu | 08:00 - 12:00', initials: 'IP' },
        { name: 'Dr. Dian Pratiwi, Sp.KFR', spec: 'Kedokteran Fisik & Rehabilitasi', category: 'rehabilitasi', location: 'MK Cibubur', schedule: 'Senin - Jumat | 10:00 - 16:00', initials: 'DP' },
        { name: 'Dr. Yuliana, M.Psi', spec: 'Psikolog', category: 'psikolog', location: 'MK Bintaro', schedule: 'Senin, Rabu | 13:00 - 17:00', initials: 'YL' },
        { name: 'Dr. Eko Prasetyo, Sp.OT', spec: 'Bedah Ortopedi', category: 'bedah', location: 'MK Kelapa Gading', schedule: 'Selasa, Kamis | 08:00 - 14:00', initials: 'EP' },
        { name: 'Dr. Sri Wahyuni, Sp.PD-KGEH', spec: 'Penyakit Dalam - Gastroentero', category: 'penyakit-dalam', location: 'MK Surabaya', schedule: 'Senin, Rabu, Jumat | 09:00 - 13:00', initials: 'SW' },
        { name: 'Dr. Bambang Sutrisno, Sp.BS', spec: 'Bedah Saraf', category: 'bedah', location: 'MK Tegal', schedule: 'Selasa, Kamis | 10:00 - 15:00', initials: 'BT' },
        { name: 'Dr. Fitri Handayani, Sp.A(K)', spec: 'Anak - Konsultan Neurologi', category: 'anak', location: 'MK Deltamas', schedule: 'Senin - Kamis | 08:00 - 14:00', initials: 'FH' },
        { name: 'Dr. Irfan Hakim, Sp.U', spec: 'Bedah Urologi', category: 'bedah', location: 'MK Kalideres', schedule: 'Senin, Rabu, Jumat | 10:00 - 16:00', initials: 'IH' },
    ];

    // ===== SPECIALIZATION PAGE: RENDER DOCTORS =====
    var doctorGrid = document.getElementById('doctorGrid');
    var filterTabs = document.getElementById('filterTabs');

    if (doctorGrid && filterTabs) {
        function renderDoctors(filter) {
            var filtered = filter === 'all' ? doctors : doctors.filter(function (d) { return d.category === filter; });
            var noResults = document.getElementById('noResults');

            if (filtered.length === 0) {
                doctorGrid.innerHTML = '';
                if (noResults) noResults.style.display = 'block';
                return;
            }

            if (noResults) noResults.style.display = 'none';

            doctorGrid.innerHTML = filtered.map(function (doc) {
                return '<div class="doctor-card">' +
                    '<div class="doctor-card-header">' +
                    '<div class="doctor-avatar">' + doc.initials + '</div>' +
                    '<div class="doctor-info">' +
                    '<h3>' + doc.name + '</h3>' +
                    '<div class="doctor-specialization">' + doc.spec + '</div>' +
                    '<div class="doctor-location">📍 ' + doc.location + '</div>' +
                    '</div></div>' +
                    '<div class="doctor-card-footer">' +
                    '<span class="doctor-schedule">' + doc.schedule + '</span>' +
                    '<a href="/janji-temu?step=3&doctor=' + encodeURIComponent(doc.name) + '" class="btn-appointment-sm">Buat Janji</a>' +
                    '</div></div>';
            }).join('');
        }

        // Initial render
        renderDoctors('all');

        // Filter click handler
        filterTabs.addEventListener('click', function (e) {
            if (e.target.classList.contains('filter-tab')) {
                filterTabs.querySelectorAll('.filter-tab').forEach(function (tab) {
                    tab.classList.remove('active');
                });
                e.target.classList.add('active');
                renderDoctors(e.target.dataset.filter);
            }
        });
    }

    // ===== APPOINTMENT PAGE: STEP NAVIGATION =====
    var today = new Date();
    var dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        var yyyy = today.getFullYear();
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var dd = String(today.getDate()).padStart(2, '0');
        dateInput.setAttribute('min', yyyy + '-' + mm + '-' + dd);

        var maxDate = new Date(today);
        maxDate.setDate(maxDate.getDate() + 30);
        var maxYyyy = maxDate.getFullYear();
        var maxMm = String(maxDate.getMonth() + 1).padStart(2, '0');
        var maxDd = String(maxDate.getDate()).padStart(2, '0');
        dateInput.setAttribute('max', maxYyyy + '-' + maxMm + '-' + maxDd);
    }
});

// ===== APPOINTMENT FORM STEPS =====
var selectedDoctor = '';

function goToStep(step) {
    document.getElementById('formStep1').style.display = step === 1 ? 'block' : 'none';
    document.getElementById('formStep2').style.display = step === 2 ? 'block' : 'none';
    document.getElementById('formStep3').style.display = step === 3 ? 'block' : 'none';

    var step1 = document.getElementById('step1Indicator');
    var step2 = document.getElementById('step2Indicator');
    var step3 = document.getElementById('step3Indicator');

    if (step1) {
        step1.classList.toggle('active', step >= 1);
        step2.classList.toggle('active', step >= 2);
        step3.classList.toggle('active', step >= 3);
    }
}

function selectDoctor(element, doctorName) {
    selectedDoctor = doctorName;
    if (element) {
        var cards = element.parentNode.querySelectorAll('.doctor-card');
        cards.forEach(function (card) {
            card.style.border = '2px solid transparent';
        });
        element.style.border = '2px solid var(--primary-blue)';
    }
}

function submitAppointment() {
    var name = document.getElementById('patientName').value.trim();
    var phone = document.getElementById('patientPhone').value.trim();

    if (!name || !phone) {
        alert('Mohon lengkapi Nama dan Nomor Telepon.');
        return;
    }

    var doctor = selectedDoctor || 'Belum dipilih';

    alert(
        '✅ Janji Temu Berhasil Dibuat!\n\n' +
        'Dokter: ' + doctor + '\n' +
        'Pasien: ' + name + '\n' +
        'Telepon: ' + phone + '\n\n' +
        'Konfirmasi akan dikirim via SMS/WhatsApp.\nTerima kasih telah memilih Mitra Keluarga!'
    );
}

// ===== DIRECT STEP NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var stepParam = urlParams.get('step');
    var doctorParam = urlParams.get('doctor');

    if (stepParam === '3' && doctorParam) {
        selectedDoctor = decodeURIComponent(doctorParam);
        setTimeout(function() {
            if (typeof goToStep === 'function') {
                goToStep(3);
                
                // Show a helpful hint that doctor is selected
                var infoBoxText = document.querySelector('.appointment-form .form-info div');
                if (infoBoxText) {
                    infoBoxText.innerHTML = '<strong>Dokter Terpilih: ' + selectedDoctor + '</strong><br>Silakan lengkapi data pasien untuk mengonfirmasi janji temu Anda.';
                }
            }
        }, 100);
    }
});
