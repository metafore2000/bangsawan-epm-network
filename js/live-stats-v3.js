(() => {
    const getLang = () => localStorage.getItem("siteLang") === "en" ? "en" : "bm";

    function syncLiveUI() {
        const lang = getLang();
        const views = document.querySelector("[data-live-views-label]");
        const interest = document.querySelector("[data-live-interest-label]");
        const ask = document.querySelector("[data-live-ask-label]");
        const askButton = document.getElementById("beAskFab");
        const panelTitle = document.querySelector("[data-ask-panel-title]");
        const closeLabel = document.querySelector("[data-ask-close-label]");
        const closeX = document.getElementById("beAskClose");

        if (views) views.textContent = lang === "en" ? "VIEWS" : "PAPARAN";
        if (interest) interest.textContent = lang === "en" ? "INTERESTED" : "BERMINAT";
        if (ask) ask.textContent = lang === "en" ? "Ask Us" : "Tanya Kami";
        if (askButton) askButton.setAttribute("aria-label", lang === "en" ? "Ask Us" : "Tanya Kami");
        if (panelTitle) panelTitle.textContent = lang === "en" ? "Choose How to Contact Us" : "Pilih Cara Hubungi";
        if (closeLabel) closeLabel.textContent = lang === "en" ? "Close" : "Tutup";
        if (closeX) closeX.setAttribute("aria-label", lang === "en" ? "Close" : "Tutup");
    }

    function initContactHub() {
        const button = document.getElementById("beAskFab");
        const panel = document.getElementById("beAskPanel");
        const closeX = document.getElementById("beAskClose");
        const closeButton = document.getElementById("beAskPanelClose");
        if (!button || !panel) return;

        const setOpen = (open) => {
            panel.classList.toggle("open", open);
            panel.setAttribute("aria-hidden", open ? "false" : "true");
            button.setAttribute("aria-expanded", open ? "true" : "false");
        };

        button.addEventListener("click", (event) => {
            event.stopPropagation();
            setOpen(!panel.classList.contains("open"));
        });

        closeX?.addEventListener("click", () => setOpen(false));
        closeButton?.addEventListener("click", () => setOpen(false));

        panel.addEventListener("click", event => event.stopPropagation());
        document.addEventListener("click", () => setOpen(false));
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") setOpen(false);
        });

        panel.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => setOpen(false));
        });
    }

    function boot() {
        syncLiveUI();
        initContactHub();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot);
    } else {
        boot();
    }

    window.addEventListener("storage", syncLiveUI);
    document.addEventListener("click", event => {
        const button = event.target.closest('button[onclick*="setLang"]');
        if (button) setTimeout(syncLiveUI, 0);
    });
})();
