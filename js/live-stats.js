(() => {
    function syncLiveStatsLanguage() {
        const lang = localStorage.getItem("siteLang") === "en" ? "en" : "bm";
        const views = document.querySelector("[data-live-views-label]");
        const interest = document.querySelector("[data-live-interest-label]");

        if (views) views.textContent = lang === "en" ? "VIEWS" : "PAPARAN";
        if (interest) interest.textContent = lang === "en" ? "INTERESTED" : "BERMINAT";
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", syncLiveStatsLanguage);
    } else {
        syncLiveStatsLanguage();
    }

    window.addEventListener("storage", syncLiveStatsLanguage);

    document.addEventListener("click", event => {
        const button = event.target.closest('button[onclick*="setLang"]');
        if (button) setTimeout(syncLiveStatsLanguage, 0);
    });
})();
