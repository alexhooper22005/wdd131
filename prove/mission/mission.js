
let selectElem = document.querySelector('#lightOrDark');
let pageContent = document.querySelector('body');
let content = document.querySelector('#content');
let logoimg = document.querySelector('#logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'Dark') {
        document.body.style.backgroundColor = "dimgray";
        document.body.style.color = "white";
        content.style.border = "2px solid white";
        logoimg.src = "images/byui-logo-white.png";
    } 
    else {
        
        document.body.style.backgroundColor = "White";
        document.body.style.color = "black";
        content.style.border = "2px solid black";
        logoimg.src = "images/BYU-I-logo.jpg";

        
    }
}
          