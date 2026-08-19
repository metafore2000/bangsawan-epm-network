import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
    getDatabase,
    ref,
    runTransaction,
    onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAzZz38XBfv-ncFZxCP70pbth5XBI4TD3E",
    authDomain: "bangsawan-epm-network.firebaseapp.com",
    databaseURL: "https://bangsawan-epm-network-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bangsawan-epm-network",
    storageBucket: "bangsawan-epm-network.firebasestorage.app",
    messagingSenderId: "926820032864",
    appId: "1:926820032864:web:fd3160a9e4ddd1dd303e05"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const visitorRef = ref(db, "counter/visitor");
const joinRef = ref(db, "counter/join");
const visitorSessionKey = "bangsawanVisitorCountedV1";

function formatCounter(value) {
    return Number(value || 0).toLocaleString("en-US");
}

function updateCounter(selector, value) {
    document.querySelectorAll(selector).forEach(element => {
        element.textContent = formatCounter(value);
    });
}

function countVisitorOncePerSession() {
    let shouldCount = true;

    try {
        if (sessionStorage.getItem(visitorSessionKey)) {
            shouldCount = false;
        } else {
            sessionStorage.setItem(visitorSessionKey, "1");
        }
    } catch (error) {
        // Jika sessionStorage disekat, lawatan masih dikira seperti biasa.
    }

    if (!shouldCount) return;

    runTransaction(visitorRef, value => (value || 0) + 1).catch(() => {
        try {
            sessionStorage.removeItem(visitorSessionKey);
        } catch (error) {
            // Tiada tindakan diperlukan.
        }
    });
}

function initCounters() {
    onValue(visitorRef, snapshot => {
        updateCounter("#visitorCounter", snapshot.val());
    });

    onValue(joinRef, snapshot => {
        updateCounter("#joinCounter", snapshot.val());
    });

    countVisitorOncePerSession();

    document
        .querySelectorAll("#joinBtn, #headerBtn, #heroBtn, #testiBtn")
        .forEach(button => {
            button.addEventListener("click", () => {
                runTransaction(joinRef, value => (value || 0) + 1);
            });
        });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCounters);
} else {
    initCounters();
}
