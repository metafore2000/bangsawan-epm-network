document.addEventListener("DOMContentLoaded", () => {

    console.log("Display Engine Ready");

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
            });
        });

    }

});

// Fungsi ini dipanggil oleh onclick dalam HTML
const translations = {

    bm: {

        oppTitle: "SATU KEAHLIAN.<br><span>EMPAT PELUANG.</span>",

        oppDesc: 'Kenapa hanya menjadi pelanggan sedangkan anda boleh menjadi <strong>Ahli Bangsawan EPM?</strong>',

        opp1Title: "BELI PADA<br>HARGA AHLI",
        opp1Sub: "JIMAT SETIAP KALI MEMBELI",
        opp1Desc: "Nikmati harga ahli yang lebih rendah<br>untuk kegunaan sendiri<br>atau keluarga.",

        opp2Title: "JUAL & NIKMATI<br>KEUNTUNGAN",
        opp2Sub: "TUKAR PEMBELIAN<br>MENJADI PENDAPATAN",
        opp2Desc: "Jual kepada pelanggan dan nikmati<br>potensi keuntungan sehingga<br><strong>100%</strong> daripada setiap jualan."
,
        opp3Title: "BINA TEAM<br>JUALAN",
        opp3Sub: "BUAT DUIT BERSAMA,<br>BUKAN BERSENDIRIAN",
        opp3Desc: "Bimbing ahli baharu dan bina<br>rangkaian yang semakin<br>berkembang.",

        opp4Title: "BINA LEADER<br>MASA DEPAN",
        opp4Sub: "BIMBING, LAHIRKAN,<br>DAN KEMBANGKAN LEADER",
        opp4Desc: "Lahirkan leader yang mampu<br>membina team sendiri dan terus<br>mengembangkan rangkaian."
    ,
        opp1Point: "✓ LEBIH JIMAT, LEBIH BERBALOI",

        opp2Point: "✓ KOMISEN DIBAYAR SETIAP JUALAN",

        opp3Point: "✓ BINA PASUKAN YANG KUKUH",

        opp4Point: "✓ LEADER HEBAT, LEGASI BERMAKNA",
                benefitsTitle: "Kenapa Ramai Pilih Bangsawan EPM?",

        benefitsDesc: "Platform affiliate premium untuk membantu anda menjana pendapatan tanpa perlu menyimpan stok.",

        b1: "Daftar Percuma",
        b1Desc: "Tiada yuran pendaftaran.<br>Terus mula belajar dan menjana pendapatan.",

        b2: "Produk Berkualiti",
        b2Desc: "Produk berkualiti tinggi dengan permintaan yang konsisten.",

        b3: "Bimbingan & Group Support",
        b3Desc: "Bimbingan langkah demi langkah serta sokongan komuniti yang aktif.",

        b4: "Bahan Promosi",
        b4Desc: "Poster, video dan bahan pemasaran disediakan untuk memudahkan promosi.",

        b5: "Tiada Simpan Stok",
        b5Desc: "Fokus menjual tanpa perlu menyimpan atau menguruskan stok produk.",

        b6: "Potensi Pendapatan",
        b6Desc: "Nikmati peluang menjana pendapatan lumayan mengikut usaha anda.",

        benefitsBtn: "CARA DAFTAR",

        navHome: "HOME",
        navBenefits: "KELEBIHAN",
        navProducts: "PRODUK",
        navTestimonials: "TESTIMONI",
        navFaq: "FAQ",
        headerBtn: "DAFTAR SEKARANG",

    },
        en: {

        oppTitle: "ONE MEMBERSHIP.<br><span>FOUR OPPORTUNITIES.</span>",

        oppDesc: 'Why remain just a customer when you can become a <strong>Bangsawan EPM Member?</strong>',

        opp1Title: "BUY AT<br>MEMBER PRICE",
        opp1Sub: "SAVE EVERY TIME YOU BUY",
        opp1Desc: "Enjoy exclusive member pricing<br>for yourself<br>or your family.",

        opp2Title: "SELL & EARN<br>PROFIT",
        opp2Sub: "TURN PURCHASES<br>INTO INCOME",
        opp2Desc: "Sell to customers and enjoy<br>profit potential of up to<br><strong>100%</strong> on every sale."
,
        opp3Title: "BUILD A SALES<br>TEAM",
        opp3Sub: "EARN TOGETHER,<br>NOT ALONE",
        opp3Desc: "Guide new members and build<br>a stronger and growing<br>network.",

        opp4Title: "BUILD FUTURE<br>LEADERS",
        opp4Sub: "MENTOR, DEVELOP,<br>AND GROW LEADERS",
        opp4Desc: "Develop leaders who can build<br>their own teams and continue<br>expanding the network."
    ,
        opp1Point: "✓ SAVE MORE, GET MORE VALUE",

        opp2Point: "✓ COMMISSION PAID ON EVERY SALE",

        opp3Point: "✓ BUILD A STRONG SALES TEAM",

        opp4Point: "✓ GREAT LEADERS, LASTING LEGACY",
        
        benefitsTitle: "Why Choose Bangsawan EPM?",

        benefitsDesc: "A premium affiliate platform that helps you earn income without keeping stock.",

        b1: "Free Registration",
        b1Desc: "No registration fee.<br>Start learning and earning immediately.",

        b2: "Quality Products",
        b2Desc: "High-quality products with consistent demand.",

        b3: "Coaching & Group Support",
        b3Desc: "Step-by-step guidance with an active support community.",

        b4: "Marketing Materials",
        b4Desc: "Posters, videos and marketing materials are provided to make promotion easier.",

        b5: "No Stock Keeping",
        b5Desc: "Focus on selling without storing or managing product inventory.",

        b6: "Income Potential",
        b6Desc: "Enjoy the opportunity to earn attractive income based on your effort.",

        benefitsBtn: "HOW TO REGISTER",

        navHome: "HOME",
        navBenefits: "BENEFITS",
        navProducts: "PRODUCTS",
        navTestimonials: "TESTIMONIALS",
        navFaq: "FAQ",
        headerBtn: "REGISTER NOW",

    }

};

function setLang(lang){

    const data = translations[lang];

    if(!data) return;

    Object.keys(data).forEach(id => {

        const el = document.getElementById(id);

        if(el){

            el.innerHTML = data[id];

        }

    });

    updateOpportunityPoints(lang);
    updateNavbar(lang);
}

function updateOpportunityPoints(lang){

    const data = translations[lang];

    if(!data) return;

    const ids = ["opp1Point","opp2Point","opp3Point","opp4Point"];

    ids.forEach(id=>{

        const el=document.getElementById(id);

        if(el){

            el.innerHTML=data[id];

        }

    });

}

function updateNavbar(lang){

    const data = translations[lang];

    const nav = document.querySelectorAll(".mobile-menu nav a");

    if(nav.length >= 5){

        nav[0].textContent = data.navHome;
        nav[1].textContent = data.navBenefits;
        nav[2].textContent = data.navProducts;
        nav[3].textContent = data.navTestimonials;
        nav[4].textContent = data.navFaq;

    }

    const btn = document.getElementById("headerBtn");

    if(btn){

        btn.textContent = data.headerBtn;

    }

}