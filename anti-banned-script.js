document.addEventListener("DOMContentLoaded", () => {
    const abSlides = document.querySelectorAll(".slide");
    const abPrevBtn = document.getElementById("abPrevBtn");
    const abNextBtn = document.getElementById("abNextBtn");
    const abCurrentNumEl = document.getElementById("abCurrentNum");
    const abTotalNumEl = document.getElementById("abTotalNum");
    const abProgressBar = document.getElementById("abProgressBar");

    let currentABSlide = 0;
    const totalABSlides = abSlides.length;

    abTotalNumEl.textContent = String(totalABSlides).padStart(2, "0");

    function updateABSlide(index) {
        if (index < 0 || index >= totalABSlides) return;
        currentABSlide = index;

        abSlides.forEach((slide, idx) => {
            if (idx === currentABSlide) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });

        abCurrentNumEl.textContent = String(currentABSlide + 1).padStart(2, "0");
        const progressPercentage = ((currentABSlide + 1) / totalABSlides) * 100;
        abProgressBar.style.width = `${progressPercentage}%`;

        abPrevBtn.disabled = currentABSlide === 0;
        abNextBtn.disabled = currentABSlide === totalABSlides - 1;
    }

    abNextBtn.addEventListener("click", () => {
        if (currentABSlide < totalABSlides - 1) updateABSlide(currentABSlide + 1);
    });

    abPrevBtn.addEventListener("click", () => {
        if (currentABSlide > 0) updateABSlide(currentABSlide - 1);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "PageDown") {
            if (currentABSlide < totalABSlides - 1) updateABSlide(currentABSlide + 1);
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
            if (currentABSlide > 0) updateABSlide(currentABSlide - 1);
        }
    });

    updateABSlide(0);
});