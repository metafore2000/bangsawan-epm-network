let images = [];
const img = document.getElementById("testiImage");
const viewer = document.querySelector(".testi-viewer");
const prev = document.querySelector(".testi-prev");
const next = document.querySelector(".testi-next");
const counter = document.getElementById("testiCurrent");

if(img && prev && next && counter){

    let current = 0;
    let direction = "next";
    let autoSlide;
    async function loadImages(){

    const response = await fetch("testimoni.json");

    images = await response.json();

    document.getElementById("testiTotal").textContent = images.length;

    showImage(0);

    startAuto();

}

function showImage(index){

    img.style.transition = "transform .45s ease, opacity .45s ease";

    if(direction === "next"){

        img.style.transform = "translateX(60px)";
    }
    else{

        img.style.transform = "translateX(-60px)";
    }

    img.style.opacity = 0;

    setTimeout(()=>{

        img.src = images[index];

        counter.textContent = index + 1;

        if(direction === "next"){

            img.style.transform = "translateX(-60px)";
        }
        else{

            img.style.transform = "translateX(60px)";
        }

        requestAnimationFrame(()=>{

            img.style.opacity = 1;

            img.style.transform = "translateX(0)";

        });

    },220);

}

    function nextImage(){
direction = "next";
        current++;

        if(current >= images.length){

            current = 0;

        }

        showImage(current);

    }

    function prevImage(){
direction = "prev";
        current--;

        if(current < 0){

            current = images.length - 1;

        }

        showImage(current);

    }

function startAuto(){

    stopAuto();

    autoSlide = setInterval(nextImage,8000);

}

viewer.addEventListener("mouseover", () => {

    stopAuto();

});

viewer.addEventListener("mouseout", () => {

    startAuto();

});

    function stopAuto(){

        clearInterval(autoSlide);

    }

    next.addEventListener("click",()=>{

        stopAuto();

        nextImage();

    });

    prev.addEventListener("click",()=>{

        stopAuto();

        prevImage();

    });

loadImages();

}