document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const currentSlideNumEl = document.getElementById("currentSlideNum");
    const totalSlideNumEl = document.getElementById("totalSlideNum");
    const progressBar = document.getElementById("progressBar");

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Set total slide di UI
    totalSlideNumEl.textContent = String(totalSlides).padStart(2, "0");

    // Fungsi update slide
    function updateSlide(index) {
        if (index < 0 || index >= totalSlides) return;
        currentSlide = index;

        // Toggle active class
        slides.forEach((slide, idx) => {
            if (idx === currentSlide) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });

        // Update counter & progress bar
        currentSlideNumEl.textContent = String(currentSlide + 1).padStart(2, "0");
        const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Update button states
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }

    // Klik tombol Next / Prev
    nextBtn.addEventListener("click", () => {
        if (currentSlide < totalSlides - 1) updateSlide(currentSlide + 1);
    });

    prevBtn.addEventListener("click", () => {
        if (currentSlide > 0) updateSlide(currentSlide - 1);
    });

    // Keyboard navigation (Panah Kiri / Kanan)
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "PageDown") {
            if (currentSlide < totalSlides - 1) updateSlide(currentSlide + 1);
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
            if (currentSlide > 0) updateSlide(currentSlide - 1);
        }
    });

    // Interaksi tombol slide 1
    const welcomeBtn = document.getElementById("welcomeBtn");
    const interactiveFeedback = document.getElementById("interactiveFeedback");

    if (welcomeBtn) {
        welcomeBtn.addEventListener("click", () => {
            interactiveFeedback.textContent = ">>> ACCESS GRANTED: Selamat datang di tim!";
            interactiveFeedback.style.color = "var(--neon-yellow)";
            welcomeBtn.innerHTML = `<span>Session Verified</span> <i class="fa-solid fa-check"></i>`;
        });
    }

    // Init awal
    updateSlide(0);
});

// INTERACTIVE PROFILE DETAILS (SLIDE 2 MODAL)
    const detailData = {
        bidang: {
            tag: "RINCIAN // BIDANG USAHA",
            title: "Fokus Niche Produk Pria",
            desc: "CV Ratakan beroperasi di sektor e-commerce digital dengan mengutamakan produk-produk herbal untuk vitalitas dan stamina pria dewasa yang memiliki permintaan tinggi, terkurasi dengan ketat, serta memberikan solusi nyata bagi konsumen."
        },
        model: {
            tag: "RINCIAN // MODEL BISNIS",
            title: "Paid Traffic & Direct WhatsApp",
            desc: "Pemasaran dilakukan secara agresif menggunakan iklan berbayar (Sosmed Ads) untuk menjaring calon pembeli potensial, yang kemudian diarahkan langsung ke percakapan personal via WhatsApp agar konversi penjualan jauh lebih tinggi dan terarah."
        },
        produk: {
            tag: "RINCIAN // PRODUK UNGGULAN",
            title: "Kualitas & Kepercayaan",
            desc: "Seluruh lini produk herbal dan stamina pria yang dipasarkan telah melewati uji standar kualitas yang ketat, aman, legal, serta dirancang khusus untuk membangun repeat order jangka panjang."
        },
        sumber: {
            tag: "RINCIAN // SUMBER CUSTOMER",
            title: "Konversi dari Ads ke Personal Chat",
            desc: "Arus utama calon pembeli bersumber dari lalu lintas iklan berbayar media sosial. Tim Customer Service bertugas mengelola percakapan secara personal, persuasif, dan profesional untuk mengunci pesanan."
        },
        target: {
            tag: "RINCIAN // TARGET CUSTOMER",
            title: "Pria umur (35–70 Tahun)",
            desc: "Segmen pasar utama adalah pria berusia 35 hingga 70 tahun yang membutuhkan produk kebugaran dan penambah stamina. Pendekatan komunikasi disesuaikan agar ramah, empatik, dan sangat solutif bagi kelompok usia ini."
        }
    };

    const clickableCards = document.querySelectorAll(".clickable-card");
    const profileModal = document.getElementById("profileModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modalTag = document.getElementById("modalTag");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");

    clickableCards.forEach(card => {
        card.addEventListener("click", () => {
            const key = card.getAttribute("data-detail");
            const data = detailData[key];
            if (data) {
                modalTag.textContent = data.tag;
                modalTitle.textContent = data.title;
                modalDesc.textContent = data.desc;
                profileModal.classList.add("active");
            }
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            profileModal.classList.remove("active");
        });
    }

    // Tutup modal jika klik di luar box konten
    if (profileModal) {
        profileModal.addEventListener("click", (e) => {
            if (e.target === profileModal) {
                profileModal.classList.remove("active");
            }
        });
    }

    // INTERACTIVE CS STRUCTURE & CRUD SIMULATION (SLIDE 3)
    let csCount = 2; // Mulai dengan 2 CS (CS 1 & CS 2)
    const csMembersContainer = document.getElementById("csMembersContainer");
    const addCsBtn = document.getElementById("addCsBtn");
    const removeCsBtn = document.getElementById("removeCsBtn");

    function renderCsMembers() {
        if (!csMembersContainer) return;
        csMembersContainer.innerHTML = "";
        for (let i = 1; i <= csCount; i++) {
            const memberBadge = document.createElement("div");
            memberBadge.className = "member-badge interactive-node";
            memberBadge.setAttribute("data-role", `cs${i}`);
            memberBadge.innerHTML = `<span>CS ${i}</span> <i class="fa-solid fa-arrow-pointer"></i>`;
            
            // Event listener klik untuk memunculkan modal rincian anggota CS
            memberBadge.addEventListener("click", () => {
                csModalTag.textContent = `PERAN OPERASIONAL // CS ${i}`;
                csModalTitle.textContent = `Eksekusi Lapangan & Bimbingan Leader`;
                csModalDesc.textContent = `CS ${i} bertugas mengeksekusi chat harian. Jika menemui kendala operasional, SOP, atau hambatan teknis, CS ${i} dibimbing dan dikoordinasikan langsung oleh CS Leader. Jumlah anggota tim ini fleksibel dan akan terus bertambah seiring skalasi perusahaan.`;
                if(csModal) csModal.classList.add("active");
            });

            csMembersContainer.appendChild(memberBadge);
        }
    }

    if (addCsBtn) {
        addCsBtn.addEventListener("click", () => {
            if (csCount < 6) { // Batas maksimal simulasi visual 6 orang agar rapi
                csCount++;
                renderCsMembers();
            }
        });
    }

    if (removeCsBtn) {
        removeCsBtn.addEventListener("click", () => {
            if (csCount > 1) { // Minimal sisa 1 CS
                csCount--;
                renderCsMembers();
            }
        });
    }

    // Modal data untuk Leader
    const csData = {
        leader: {
            tag: "PERAN UTAMA // CS LEADER",
            title: "Pusat Pembimbingan & Pengawasan",
            desc: "CS Leader bertanggung jawab penuh dalam mengarahkan, membimbing, dan mengawasi seluruh anggota CS yang ada di bawahnya. Jika ada kendala, kebingungan terkait SOP, atau hambatan teknis, koordinasi wajib diarahkan ke Leader."
        }
    };

    const leaderNode = document.querySelector('.interactive-node[data-role="leader"]');
    if (leaderNode) {
        leaderNode.addEventListener("click", () => {
            const data = csData.leader;
            csModalTag.textContent = data.tag;
            csModalTitle.textContent = data.title;
            csModalDesc.textContent = data.desc;
            if(csModal) csModal.classList.add("active");
        });
    }

    const csModal = document.getElementById("csModal");
    const closeCsModalBtn = document.getElementById("closeCsModalBtn");
    const csModalTag = document.getElementById("csModalTag");
    const csModalTitle = document.getElementById("csModalTitle");
    const csModalDesc = document.getElementById("csModalDesc");

    if (closeCsModalBtn) {
        closeCsModalBtn.addEventListener("click", () => {
            if(csModal) csModal.classList.remove("active");
        });
    }

    if (csModal) {
        csModal.addEventListener("click", (e) => {
            if (e.target === csModal) {
                csModal.classList.remove("active");
            }
        });
    }

    // Render awal saat halaman dimuat
    renderCsMembers();


    // INTERACTIVE WA STRATEGY MODAL (SLIDE 6)
    const waData = {
        business: {
            tag: "AKUN UTAMA // 1X WA BUSINESS",
            title: "Pusat Masuknya Traffic Iklan",
            desc: "WhatsApp Business digunakan murni sebagai akun utama yang menerima pesan masuk (inbound) dari calon pembeli hasil iklan berbayar (Meta Ads). Akun ini dijaga kredibilitasnya agar tidak terkena spam atau banned karena menjadi aset utama konversi."
        },
        biasa1: {
            tag: "AKUN CADANGAN // 1X WA BIASA (TUMBAL #1)",
            title: "Eksekutor Follow-Up Aktif",
            desc: "Digunakan khusus untuk menyapa atau mem-follow-up calon customer yang belum sempat nge-chat duluan. Karena aktivitas menyapa duluan berisiko tinggi terdeteksi sistem dan terkena banned, WA biasa ini diposisikan sebagai 'tumbal' pelindung akun utama."
        },
        biasa2: {
            tag: "AKUN CADANGAN // 1X WA BIASA (TUMBAL #2)",
            title: "Cadangan Operasional Tambahan",
            desc: "Berfungsi sebagai pelapis kedua untuk tugas follow-up aktif. Jika sewaktu-waktu akun tumbal pertama mengalami kendala atau terblokir, operasional tim tidak akan berhenti karena langsung digantikan oleh cadangan kedua ini."
        }
    };

    const interactiveWaCards = document.querySelectorAll(".interactive-wa");
    const waModal = document.getElementById("waModal");
    const closeWaModalBtn = document.getElementById("closeWaModalBtn");
    const waModalTag = document.getElementById("waModalTag");
    const waModalTitle = document.getElementById("waModalTitle");
    const waModalDesc = document.getElementById("waModalDesc");

    interactiveWaCards.forEach(card => {
        card.addEventListener("click", () => {
            const type = card.getAttribute("data-wa");
            const data = waData[type];
            if (data) {
                waModalTag.textContent = data.tag;
                waModalTitle.textContent = data.title;
                waModalDesc.textContent = data.desc;
                if(waModal) waModal.classList.add("active");
            }
        });
    });

    if (closeWaModalBtn) {
        closeWaModalBtn.addEventListener("click", () => {
            if(waModal) waModal.classList.remove("active");
        });
    }

    if (waModal) {
        waModal.addEventListener("click", (e) => {
            if (e.target === waModal) {
                waModal.classList.remove("active");
            }
        });
    }

    // INTERACTIVE CHAT DISTRIBUTION MODAL (SLIDE 4 - RINCI)
    const distData = {
        leader: {
            tag: "SISTEM QUEENS3 // CS LEADER (100 CHAT)",
            title: "Pusat Kontrol, Filter, & Backup Operasional",
            desc: "Melalui aplikasi internal Queens3, leads atau calon customer dari iklan berbayar diseleksi. CS Leader memegang porsi terbesar (100 chat) karena memiliki fungsi ganda: mengeksekusi konversi penjualan sekaligus melakukan pengawasan kualitas chat seluruh anggota tim, serta bersiap sedia sebagai backup jika terjadi lonjakan beban kerja."
        },
        cs1: {
            tag: "SISTEM QUEENS3 // CS 1 FREELANCE (50 CHAT)",
            title: "Eksekusi Penjualan Terfokus",
            desc: "Data leads yang telah diatur distribusinya oleh sistem Queens3 diteruskan kepada CS 1 sebanyak 50 chat harian. Porsi ini dirancang agar setiap CS freelance dapat fokus memberikan pelayanan persuasif, menjaga alur balasan sesuai SOP, dan mengunci transaksi dengan maksimal."
        },
        cs2: {
            tag: "SISTEM QUEENS3 // CS 2 FREELANCE (50 CHAT)",
            title: "Eksekusi Penjualan Terfokus",
            desc: "Berpasangan dengan CS 1 di bawah arahan Leader, CS 2 mengelola 50 chat harian dari pembagian sistem Queens3. Angka dan skema pembagian ini bersifat fleksibel; jika volume iklan meningkat atau menurun, sistem distribusi akan disesuaikan secara proporsional dengan kondisi di lapangan."
        }
    };

    const interactiveDistCards = document.querySelectorAll(".interactive-dist");
    const distModal = document.getElementById("distModal");
    const closeDistModalBtn = document.getElementById("closeDistModalBtn");
    const distModalTag = document.getElementById("distModalTag");
    const distModalTitle = document.getElementById("distModalTitle");
    const distModalDesc = document.getElementById("distModalDesc");

    interactiveDistCards.forEach(card => {
        card.addEventListener("click", () => {
            const type = card.getAttribute("data-dist");
            const data = distData[type];
            if (data) {
                distModalTag.textContent = data.tag;
                distModalTitle.textContent = data.title;
                distModalDesc.textContent = data.desc;
                if(distModal) distModal.classList.add("active");
            }
        });
    });

    if (closeDistModalBtn) {
        closeDistModalBtn.addEventListener("click", () => {
            if(distModal) distModal.classList.remove("active");
        });
    }

    if (distModal) {
        distModal.addEventListener("click", (e) => {
            if (e.target === distModal) {
                distModal.classList.remove("active");
            }
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const currentSlideNumEl = document.getElementById("currentSlideNum");
    const totalSlideNumEl = document.getElementById("totalSlideNum");
    const progressBar = document.getElementById("progressBar");

    let currentSlide = 0;
    const totalSlides = slides.length;

    totalSlideNumEl.textContent = String(totalSlides).padStart(2, "0");

    function updateSlide(index) {
        if (index < 0 || index >= totalSlides) return;
        currentSlide = index;

        slides.forEach((slide, idx) => {
            if (idx === currentSlide) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });

        currentSlideNumEl.textContent = String(currentSlide + 1).padStart(2, "0");
        const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }

    nextBtn.addEventListener("click", () => {
        if (currentSlide < totalSlides - 1) updateSlide(currentSlide + 1);
    });

    prevBtn.addEventListener("click", () => {
        if (currentSlide > 0) updateSlide(currentSlide - 1);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "PageDown") {
            if (currentSlide < totalSlides - 1) updateSlide(currentSlide + 1);
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
            if (currentSlide > 0) updateSlide(currentSlide - 1);
        }
    });

    // 1. MODAL DETAIL PROFIL (SLIDE 2)
    const detailData = {
        bidang: { tag: "RINCIAN // BIDANG USAHA", title: "Fokus Niche Produk Pria", desc: "CV Ratakan beroperasi di sektor e-commerce digital dengan mengutamakan produk-produk kesehatan vitalitas dan stamina pria dewasa yang memiliki permintaan tinggi." },
        model: { tag: "RINCIAN // MODEL BISNIS", title: "Paid Traffic & Direct WhatsApp", desc: "Pemasaran dilakukan secara agresif menggunakan Meta Ads untuk menjaring calon pembeli, lalu diarahkan langsung ke WhatsApp personal." },
        produk: { tag: "RINCIAN // PRODUK UNGGULAN", title: "Kualitas & Kepercayaan", desc: "Seluruh lini produk kesehatan dan stamina pria telah melewati uji standar kualitas, aman, legal, dan dirancang untuk repeat order jangka panjang." },
        sumber: { tag: "RINCIAN // SUMBER CUSTOMER", title: "Konversi Meta Ads ke Personal Chat", desc: "Arus utama pembeli bersumber dari iklan berbayar sosial media. Tim CS bertugas mengelola percakapan secara persuasif dan profesional." },
        target: { tag: "RINCIAN // TARGET CUSTOMER", title: "Pria Paruh Baya & Senior (35–70 Tahun)", desc: "Segmen pasar utama adalah pria usia 35 hingga 70 tahun yang membutuhkan produk kebugaran dengan pendekatan komunikasi ramah dan empatik." }
    };

    const clickableCards = document.querySelectorAll(".clickable-card");
    const profileModal = document.getElementById("profileModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modalTag = document.getElementById("modalTag");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");

    clickableCards.forEach(card => {
        card.addEventListener("click", () => {
            const key = card.getAttribute("data-detail");
            const data = detailData[key];
            if (data && profileModal) {
                modalTag.textContent = data.tag;
                modalTitle.textContent = data.title;
                modalDesc.textContent = data.desc;
                profileModal.classList.add("active");
            }
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => profileModal.classList.remove("active"));
    }

    // 2. STRUKTUR CS & CRUD SIMULASI (SLIDE 3)
    let csCount = 2;
    const csMembersContainer = document.getElementById("csMembersContainer");
    const addCsBtn = document.getElementById("addCsBtn");
    const removeCsBtn = document.getElementById("removeCsBtn");
    const csModal = document.getElementById("csModal");
    const closeCsModalBtn = document.getElementById("closeCsModalBtn");
    const csModalTag = document.getElementById("csModalTag");
    const csModalTitle = document.getElementById("csModalTitle");
    const csModalDesc = document.getElementById("csModalDesc");

    function renderCsMembers() {
        if (!csMembersContainer) return;
        csMembersContainer.innerHTML = "";
        for (let i = 1; i <= csCount; i++) {
            const memberBadge = document.createElement("div");
            memberBadge.className = "member-badge interactive-node";
            memberBadge.innerHTML = `<span>CS ${i} (Freelance)</span> <i class="fa-solid fa-arrow-pointer"></i>`;
            
            memberBadge.addEventListener("click", () => {
                csModalTag.textContent = `PERAN OPERASIONAL // CS ${i}`;
                csModalTitle.textContent = `Eksekusi Lapangan & Bimbingan Leader`;
                csModalDesc.textContent = `CS ${i} bertugas mengeksekusi chat harian. Jika menemui kendala SOP atau teknis, CS ${i} dibimbing langsung oleh CS Leader. Jumlah anggota tim ini fleksibel dan akan terus bertambah.`;
                if(csModal) csModal.classList.add("active");
            });

            csMembersContainer.appendChild(memberBadge);
        }
    }

    if (addCsBtn) {
        addCsBtn.addEventListener("click", () => {
            if (csCount < 6) { csCount++; renderCsMembers(); }
        });
    }

    if (removeCsBtn) {
        removeCsBtn.addEventListener("click", () => {
            if (csCount > 1) { csCount--; renderCsMembers(); }
        });
    }

    const leaderNode = document.querySelector('.interactive-node[data-role="leader"]');
    if (leaderNode) {
        leaderNode.addEventListener("click", () => {
            csModalTag.textContent = "PERAN UTAMA // CS LEADER";
            csModalTitle.textContent = "Pusat Pembimbingan & Pengawasan";
            csModalDesc.textContent = "CS Leader bertanggung jawab penuh dalam mengarahkan, membimbing, dan mengawasi seluruh anggota CS. Koordinasi kendala operasional wajib diarahkan ke Leader.";
            if(csModal) csModal.classList.add("active");
        });
    }

    if (closeCsModalBtn) {
        closeCsModalBtn.addEventListener("click", () => csModal.classList.remove("active"));
    }

    renderCsMembers();

    // 3. DISTRIBUSI CHAT (SLIDE 4)
    const distData = {
        leader: { tag: "SISTEM QUEENS3 // CS LEADER (100 CHAT)", title: "Pengawasan, Kontrol, & Backup", desc: "Melalui aplikasi Queens3, CS Leader memegang 100 chat untuk mengeksekusi penjualan sekaligus mengawasi kualitas chat dan menjadi backup utama." },
        cs1: { tag: "SISTEM QUEENS3 // CS 1 (50 CHAT)", title: "Eksekusi Penjualan Terfokus", desc: "CS 1 mengelola 50 chat harian dari sistem Queens3 untuk memberikan pelayanan persuasif sesuai SOP perusahaan." },
        cs2: { tag: "SISTEM QUEENS3 // CS 2 (50 CHAT)", title: "Eksekusi Penjualan Terfokus", desc: "CS 2 mengelola 50 chat harian secara bergantian. Porsi ini fleksibel menyesuaikan volume iklan harian." }
    };

    const interactiveDistCards = document.querySelectorAll(".interactive-dist");
    const distModal = document.getElementById("distModal");
    const closeDistModalBtn = document.getElementById("closeDistModalBtn");
    const distModalTag = document.getElementById("distModalTag");
    const distModalTitle = document.getElementById("distModalTitle");
    const distModalDesc = document.getElementById("distModalDesc");

    interactiveDistCards.forEach(card => {
        card.addEventListener("click", () => {
            const type = card.getAttribute("data-dist");
            const data = distData[type];
            if (data && distModal) {
                distModalTag.textContent = data.tag;
                distModalTitle.textContent = data.title;
                distModalDesc.textContent = data.desc;
                distModal.classList.add("active");
            }
        });
    });

    if (closeDistModalBtn) {
        closeDistModalBtn.addEventListener("click", () => distModal.classList.remove("active"));
    }

    // 4. STRATEGI 3 AKUN WHATSAPP (SLIDE 6)
    const waData = {
        business: { tag: "AKUN UTAMA // 1X WA BUSINESS", title: "Pusat Masuknya Traffic Iklan", desc: "Digunakan murni sebagai akun utama yang menerima pesan masuk dari iklan Meta Ads. Kredibilitasnya dijaga ketat." },
        biasa1: { tag: "AKUN CADANGAN // 1X WA BIASA (TUMBAL #1)", title: "Eksekutor Follow-Up Aktif", desc: "Digunakan untuk menyapa/follow-up customer yang belum chat duluan. Diposisikan sebagai 'tumbal' pelindung akun utama dari risiko banned." },
        biasa2: { tag: "AKUN CADANGAN // 1X WA BIASA (TUMBAL #2)", title: "Cadangan Operasional Tambahan", desc: "Berfungsi sebagai pelapis kedua tugas follow-up aktif guna mengamankan operasional tim jika akun pertama terkendala." }
    };

    const interactiveWaCards = document.querySelectorAll(".interactive-wa");
    const waModal = document.getElementById("waModal");
    const closeWaModalBtn = document.getElementById("closeWaModalBtn");
    const waModalTag = document.getElementById("waModalTag");
    const waModalTitle = document.getElementById("waModalTitle");
    const waModalDesc = document.getElementById("waModalDesc");

    interactiveWaCards.forEach(card => {
        card.addEventListener("click", () => {
            const type = card.getAttribute("data-wa");
            const data = waData[type];
            if (data && waModal) {
                waModalTag.textContent = data.tag;
                waModalTitle.textContent = data.title;
                waModalDesc.textContent = data.desc;
                waModal.classList.add("active");
            }
        });
    });

    if (closeWaModalBtn) {
        closeWaModalBtn.addEventListener("click", () => waModal.classList.remove("active"));
    }

    // GLOBAL MODAL CLOSE ON OUTSIDE CLICK
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("detail-modal")) {
            e.target.classList.remove("active");
        }
    });

    updateSlide(0);
});

// PINDAH HALAMAN KETIKA KARTU QUEENS3 DIKLIK
    const queensCard = document.getElementById("queensCard");
    if (queensCard) {
        queensCard.addEventListener("click", () => {
            window.location.href = "queens3.html";
        });
        queensCard.style.cursor = "pointer";
    }


    document.addEventListener("DOMContentLoaded", () => {
    const qSlides = document.querySelectorAll(".slide");
    const qPrevBtn = document.getElementById("qPrevBtn");
    const qNextBtn = document.getElementById("qNextBtn");
    const qCurrentNumEl = document.getElementById("qCurrentNum");
    const qTotalNumEl = document.getElementById("qTotalNum");
    const qProgressBar = document.getElementById("qProgressBar");

    let currentQSlide = 0;
    const totalQSlides = qSlides.length;

    qTotalNumEl.textContent = String(totalQSlides).padStart(2, "0");

    function updateQSlide(index) {
        if (index < 0 || index >= totalQSlides) return;
        currentQSlide = index;

        qSlides.forEach((slide, idx) => {
            if (idx === currentQSlide) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });

        qCurrentNumEl.textContent = String(currentQSlide + 1).padStart(2, "0");
        const progressPercentage = ((currentQSlide + 1) / totalQSlides) * 100;
        qProgressBar.style.width = `${progressPercentage}%`;

        qPrevBtn.disabled = currentQSlide === 0;
        qNextBtn.disabled = currentQSlide === totalQSlides - 1;
    }

    qNextBtn.addEventListener("click", () => {
        if (currentQSlide < totalQSlides - 1) updateQSlide(currentQSlide + 1);
    });

    qPrevBtn.addEventListener("click", () => {
        if (currentQSlide > 0) updateQSlide(currentQSlide - 1);
    });

    // Navigasi Keyboard Panah Kanan/Kiri
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "PageDown") {
            if (currentQSlide < totalQSlides - 1) updateQSlide(currentQSlide + 1);
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
            if (currentQSlide > 0) updateQSlide(currentQSlide - 1);
        }
    });

    updateQSlide(0);
});