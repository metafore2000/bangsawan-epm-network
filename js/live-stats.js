(() => {
    const whatsappUrl = "https://wa.me/601115788698?text=" + encodeURIComponent(
        "Assalamualaikum, saya berminat untuk menyertai Bangsawan EPM dan ingin mendapatkan maklumat lanjut mengenai peluang serta cara untuk bermula."
    );

    function ensureAskButton() {
        if (document.querySelector(".be-ask-fab")) return;

        const link = document.createElement("a");
        link.className = "be-ask-fab";
        link.href = whatsappUrl;
        link.target = "_blank";
        link.rel = "noopener";
        link.setAttribute("aria-label", "Tanya Kami");
        link.innerHTML = `
            <span class="be-ask-icon" aria-hidden="true">💬</span>
            <span class="be-ask-label" data-live-ask-label>Tanya Kami</span>
        `;
        document.body.appendChild(link);
    }

    function syncLiveStatsLanguage() {
        const lang = localStorage.getItem("siteLang") === "en" ? "en" : "bm";
        const views = document.querySelector("[data-live-views-label]");
        const interest = document.querySelector("[data-live-interest-label]");
        const ask = document.querySelector("[data-live-ask-label]");
        const askButton = document.querySelector(".be-ask-fab");

        if (views) views.textContent = lang === "en" ? "VIEWS" : "PAPARAN";
        if (interest) interest.textContent = lang === "en" ? "INTERESTED" : "BERMINAT";
        if (ask) ask.textContent = lang === "en" ? "Ask Us" : "Tanya Kami";
        if (askButton) askButton.setAttribute("aria-label", lang === "en" ? "Ask Us" : "Tanya Kami");
    }

    function init() {
        ensureAskButton();
        syncLiveStatsLanguage();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    window.addEventListener("storage", syncLiveStatsLanguage);

    document.addEventListener("click", event => {
        const button = event.target.closest('button[onclick*="setLang"]');
        if (button) setTimeout(syncLiveStatsLanguage, 0);
    });
})();
