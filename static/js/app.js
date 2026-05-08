// ===== PENSKES MVP - JavaScript =====

// ===== DOCTOR DATA (global) =====
var _p = 'https://images.unsplash.com/photo-';
var _q = '?auto=format&fit=crop&w=300&h=300&crop=faces&q=80';
var doctors = [
    { name: 'Dr. Ahmad Fauzi, Sp.PD',       spec: 'Penyakit Dalam',                   category: 'penyakit-dalam', location: 'PK Kelapa Gading',  schedule: 'Senin, Rabu, Jumat | 08:00 - 14:00',    photo: _p+'1612349317150-e413f6a5b16d'+_q },
    { name: 'Dr. Siti Nurhaliza, Sp.A',      spec: 'Anak',                              category: 'anak',           location: 'PK Bekasi Timur',   schedule: 'Selasa, Kamis | 09:00 - 15:00',          photo: _p+'1594824476967-48c8b964273f'+_q },
    { name: 'Dr. Budi Santoso, Sp.JP',       spec: 'Jantung & Pembuluh Darah',          category: 'jantung',        location: 'PK Kemayoran',      schedule: 'Senin - Jumat | 10:00 - 16:00',          photo: _p+'1582750433449-648ed127bb54'+_q },
    { name: 'Dr. Kartika Dewi, Sp.OG',       spec: 'Kebidanan & Kandungan',             category: 'kandungan',      location: 'PK Depok',          schedule: 'Senin, Rabu, Sabtu | 08:00 - 12:00',    photo: _p+'1573496359142-b8d87734a5a2'+_q },
    { name: 'Dr. Reza Pratama, Sp.B',        spec: 'Bedah Umum',                        category: 'bedah',          location: 'PK Bintaro',        schedule: 'Selasa, Rabu, Jumat | 10:00 - 15:00',   photo: _p+'1622253692010-333f2da6031d'+_q },
    { name: 'Dr. Lina Maryati, Sp.M',        spec: 'Mata',                              category: 'mata',           location: 'PK Cibubur',        schedule: 'Senin - Kamis | 09:00 - 14:00',          photo: _p+'1551836022-8b2858c9c69b'+_q },
    { name: 'Dr. Hendra Wijaya, Sp.P',       spec: 'Paru & Pernapasan',                 category: 'paru',           location: 'PK Surabaya',       schedule: 'Senin, Rabu | 08:00 - 13:00',            photo: _p+'1537368347078-c3b76b7c21fd'+_q },
    { name: 'Dr. Nurul Aini, Sp.KK',         spec: 'Kulit & Kelamin',                   category: 'kulit',          location: 'PK Kelapa Gading',  schedule: 'Selasa, Kamis | 10:00 - 15:00',          photo: _p+'1607990281526-bf3a8c23c8c5'+_q },
    { name: 'Dr. Agus Setiawan, Sp.N',       spec: 'Saraf',                             category: 'saraf',          location: 'PK Bekasi Timur',   schedule: 'Senin - Jumat | 08:00 - 14:00',          photo: _p+'1559839734-2b71ea197ec2'+_q },
    { name: 'Dr. Maya Puspita, Sp.THT',      spec: 'THT',                               category: 'tht',            location: 'PK Kemayoran',      schedule: 'Senin, Rabu, Jumat | 09:00 - 14:00',    photo: _p+'1438761681033-6461ffad8d80'+_q },
    { name: 'drg. Indah Permata',            spec: 'Gigi',                              category: 'gigi',           location: 'PK Depok',          schedule: 'Selasa, Kamis, Sabtu | 08:00 - 12:00',  photo: _p+'1544005313-94ddf0286df2'+_q },
    { name: 'Dr. Dian Pratiwi, Sp.KFR',      spec: 'Kedokteran Fisik & Rehabilitasi',   category: 'rehabilitasi',   location: 'PK Cibubur',        schedule: 'Senin - Jumat | 10:00 - 16:00',          photo: _p+'1593030761757-71fae45fa0e7'+_q },
    { name: 'Dr. Yuliana, M.Psi',            spec: 'Psikolog',                          category: 'psikolog',       location: 'PK Bintaro',        schedule: 'Senin, Rabu | 13:00 - 17:00',            photo: _p+'1630910153320-4cbc8f831ae2'+_q },
    { name: 'Dr. Eko Prasetyo, Sp.OT',       spec: 'Bedah Ortopedi',                    category: 'bedah',          location: 'PK Kelapa Gading',  schedule: 'Selasa, Kamis | 08:00 - 14:00',          photo: _p+'1612276529731-4b21494e6d1b'+_q },
    { name: 'Dr. Sri Wahyuni, Sp.PD-KGEH',   spec: 'Penyakit Dalam - Gastroentero',     category: 'penyakit-dalam', location: 'PK Surabaya',       schedule: 'Senin, Rabu, Jumat | 09:00 - 13:00',    photo: _p+'1548142542-5e3f5a577c82'+_q },
    { name: 'Dr. Bambang Sutrisno, Sp.BS',   spec: 'Bedah Saraf',                       category: 'bedah',          location: 'PK Tegal',          schedule: 'Selasa, Kamis | 10:00 - 15:00',          photo: _p+'1527613426555-5e5e56e9aa38'+_q },
    { name: 'Dr. Fitri Handayani, Sp.A(K)',  spec: 'Anak - Konsultan Neurologi',         category: 'anak',           location: 'PK Deltamas',       schedule: 'Senin - Kamis | 08:00 - 14:00',          photo: _p+'1559757175-0eb30cd8c063'+_q },
    { name: 'Dr. Irfan Hakim, Sp.U',         spec: 'Bedah Urologi',                     category: 'bedah',          location: 'PK Kalideres',      schedule: 'Senin, Rabu, Jumat | 10:00 - 16:00',    photo: _p+'1500648767791-00dcc994a43e'+_q },
];

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
                    '<div class="doctor-avatar"><svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" width="52" height="52"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>' +
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

function showStepError(stepNum, msg) {
    var el = document.getElementById('errorStep' + stepNum);
    if (!el) return;
    el.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ' + msg;
    el.style.display = 'flex';
}

function clearStepError(stepNum) {
    var el = document.getElementById('errorStep' + stepNum);
    if (el) el.style.display = 'none';
}

function goToStep(step) {
    // step 1-2 = Pilih Dokter, step 3 = Data Pasien, step 4 = Konfirmasi
    ['formStep1', 'formStep2', 'formStep3', 'formStep4'].forEach(function (id, i) {
        var el = document.getElementById(id);
        if (el) el.style.display = (step === i + 1) ? 'block' : 'none';
    });
    clearStepError(2);
    clearStepError(3);

    var s1 = document.getElementById('step1Indicator');
    var s2 = document.getElementById('step2Indicator');
    var s3 = document.getElementById('step3Indicator');
    if (s1) {
        s1.classList.toggle('active', step >= 1);
        s2.classList.toggle('active', step >= 3);
        s3.classList.toggle('active', step >= 4);
    }
}

function proceedToStep2() {
    var branch = document.getElementById('branch') ? document.getElementById('branch').value : '';
    var spec = document.getElementById('specialization') ? document.getElementById('specialization').value : '';

    var filtered = (typeof doctors !== 'undefined' ? doctors : []).filter(function (d) {
        var branchMatch = true;
        var specMatch = true;
        if (branch) {
            var locNorm = d.location.replace(/^PK\s+/i, '').toLowerCase().replace(/\s+/g, '-');
            branchMatch = locNorm === branch;
        }
        if (spec) {
            specMatch = d.category === spec;
        }
        return branchMatch && specMatch;
    });

    var grid = document.getElementById('appointmentDoctorGrid');
    var noResults = document.getElementById('apptNoResults');
    selectedDoctor = '';

    if (filtered.length === 0) {
        if (grid) grid.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
    } else {
        if (noResults) noResults.style.display = 'none';
        if (grid) {
            grid.innerHTML = filtered.map(function (doc) {
                var safeName = doc.name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
                return '<div class="doctor-card" onclick="selectAppointmentDoctor(this,\'' + safeName + '\')">' +
                    '<div class="doctor-card-header">' +
                    '<div class="doctor-avatar"><svg viewBox="0 0 24 24" fill="white" width="52" height="52"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>' +
                    '<div class="doctor-info"><h3>' + doc.name + '</h3>' +
                    '<div class="doctor-specialization">' + doc.spec + '</div>' +
                    '<div class="doctor-location">📍 ' + doc.location + '</div>' +
                    '</div></div>' +
                    '<div class="doctor-card-footer"><span class="doctor-schedule">' + doc.schedule + '</span></div>' +
                    '</div>';
            }).join('');
        }
    }
    goToStep(2);
}

function selectAppointmentDoctor(element, doctorName) {
    selectedDoctor = doctorName;
    var grid = document.getElementById('appointmentDoctorGrid');
    if (grid) {
        grid.querySelectorAll('.doctor-card').forEach(function (card) {
            card.style.border = '2px solid transparent';
        });
    }
    element.style.border = '2px solid var(--primary-blue)';
}

function proceedToStep3() {
    if (!selectedDoctor) {
        showStepError(2, 'Silakan pilih dokter terlebih dahulu.');
        return;
    }
    var note = document.getElementById('apptSelectedDoctorNote');
    if (note) note.textContent = 'Dokter terpilih: ' + selectedDoctor;
    goToStep(3);
}

function proceedToStep4() {
    var name = document.getElementById('patientName') ? document.getElementById('patientName').value.trim() : '';
    var phone = document.getElementById('patientPhone') ? document.getElementById('patientPhone').value.trim() : '';
    var dob = document.getElementById('patientDOB') ? document.getElementById('patientDOB').value : '';
    var gender = document.getElementById('patientGender') ? document.getElementById('patientGender').value : '';
    var email = document.getElementById('patientEmail') ? document.getElementById('patientEmail').value.trim() : '';

    if (!name || !phone || !dob || !gender || !email) {
        showStepError(3, 'Mohon lengkapi semua data yang wajib diisi (bertanda *).');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showStepError(3, 'Format email tidak valid. Contoh: nama@email.com');
        return;
    }

    var dateEl = document.getElementById('appointmentDate');
    var dateVal = dateEl ? dateEl.value : '';
    var dateDisplay = dateVal
        ? new Date(dateVal + 'T00:00:00').toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        : 'Belum dipilih';
    var dobDisplay = new Date(dob + 'T00:00:00').toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

    var branchEl = document.getElementById('branch');
    var branchDisplay = (branchEl && branchEl.value) ? branchEl.options[branchEl.selectedIndex].text : 'Semua Cabang';
    var specEl = document.getElementById('specialization');
    var specDisplay = (specEl && specEl.value) ? specEl.options[specEl.selectedIndex].text : 'Semua Spesialisasi';
    var notes = document.getElementById('patientNotes') ? document.getElementById('patientNotes').value.trim() : '';

    var rows = [
        ['Dokter', selectedDoctor],
        ['Spesialisasi', specDisplay],
        ['Cabang', branchDisplay],
        ['Tanggal Janji', dateDisplay],
        ['---'],
        ['Nama Pasien', name],
        ['No. Telepon', phone],
        ['Tanggal Lahir', dobDisplay],
        ['Jenis Kelamin', gender === 'laki-laki' ? 'Laki-laki' : 'Perempuan'],
        ['Email', email],
    ];
    if (notes) rows.push(['Keluhan', notes]);

    var html = '<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:20px 24px;">';
    rows.forEach(function (r) {
        if (r[0] === '---') {
            html += '<hr style="border:none;border-top:1px solid #e2e8f0;margin:10px 0;">';
        } else {
            html += '<div style="display:flex;justify-content:space-between;align-items:baseline;padding:7px 0;font-size:0.9rem;">' +
                '<span style="color:#64748b;font-weight:500;flex-shrink:0;margin-right:16px;">' + r[0] + '</span>' +
                '<span style="color:#1e293b;font-weight:600;text-align:right;">' + r[1] + '</span>' +
                '</div>';
        }
    });
    html += '</div>';

    var summary = document.getElementById('confirmationSummary');
    if (summary) summary.innerHTML = html;
    goToStep(4);
}

function submitAppointment() {
    // Hide Kembali button so user can't go back after submitting
    var backBtn = document.querySelector('#formStep4 .btn-submit[onclick="goToStep(3)"]');
    if (backBtn) backBtn.style.display = 'none';

    var modal = document.getElementById('successModal');
    if (modal) modal.style.display = 'flex';
}

function closeSuccessModal() {
    var modal = document.getElementById('successModal');
    if (modal) modal.style.display = 'none';

    // Reset all fields
    selectedDoctor = '';
    ['branch', 'specialization', 'appointmentDate', 'patientName', 'patientPhone',
     'patientDOB', 'patientGender', 'patientEmail', 'patientNotes'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        if (el.tagName === 'SELECT') el.selectedIndex = 0;
        else el.value = '';
    });

    // Restore Kembali button for next use
    var backBtn = document.querySelector('#formStep4 .btn-submit[onclick="goToStep(3)"]');
    if (backBtn) backBtn.style.display = '';

    goToStep(1);
}

// ===== DIRECT STEP NAVIGATION FROM URL =====
document.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var stepParam = urlParams.get('step');
    var doctorParam = urlParams.get('doctor');

    if (stepParam === '3' && doctorParam) {
        selectedDoctor = decodeURIComponent(doctorParam);
        setTimeout(function () {
            if (typeof goToStep === 'function') {
                goToStep(3);
                var note = document.getElementById('apptSelectedDoctorNote');
                if (note) note.textContent = 'Dokter terpilih: ' + selectedDoctor;
            }
        }, 100);
    }
});
