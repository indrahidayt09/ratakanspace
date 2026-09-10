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