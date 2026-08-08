document.addEventListener("DOMContentLoaded", async () => {

    const image = document.getElementById("testiImage");
    const prev = document.querySelector(".testi-prev");
    const next = document.querySelector(".testi-next");
    const current = document.getElementById("testiCurrent");
    const total = document.getElementById("testiTotal");

    if (!image || !prev || !next || !current || !total) {
        return;
    }

    let images = [];
    let index = 0;
    let autoSlide = null;

    try {

        const response = await fetch("testimoni.json");

        images = await response.json();

    } catch (err) {

        console.error("Gagal membaca testimoni.json", err);

        return;

    }

    if (!Array.isArray(images) || images.length === 0) {
        return;
    }

    total.textContent = images.length;

    function showImage(i) {

        index = i;

        if (index < 0) {
            index = images.length - 1;
        }

        if (index >= images.length) {
            index = 0;
        }

        image.src = images[index];

        current.textContent = index + 1;

    }

    function nextImage() {

        showImage(index + 1);

    }

    function prevImage() {

        showImage(index - 1);

    }

    function startAutoSlide() {

        stopAutoSlide();

        autoSlide = setInterval(nextImage, 8000);

    }

    function stopAutoSlide() {

        if (autoSlide) {

            clearInterval(autoSlide);

            autoSlide = null;

        }

    }

    next.addEventListener("click", () => {

        nextImage();

        startAutoSlide();

    });

    prev.addEventListener("click", () => {

        prevImage();

        startAutoSlide();

    });

    image.addEventListener("mouseenter", stopAutoSlide);

    image.addEventListener("mouseleave", startAutoSlide);

    showImage(0);

    startAutoSlide();

});