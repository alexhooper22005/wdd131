// document.querySelector('#startsearching').addEventListener('click', function() {
//     window.location.href = "trails-search.html";
// }); 

// document.querySelector('#homebutton').addEventListener('click', function() {
//     window.location.href = "trails-homepage.html";
// }); 

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
