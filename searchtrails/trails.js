

const startBtn = document.querySelector('#startsearching');
if (startBtn) {
    startBtn.addEventListener('click', function() {
        window.location.href = "trails-search.html";
    });
}

const homeBtn = document.querySelector('#homebutton');
if (homeBtn) {
    homeBtn.addEventListener('click', function() {
        window.location.href = "trails-homepage.html";
    });
}
