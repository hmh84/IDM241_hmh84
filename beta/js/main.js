const header = document.querySelector('header');
const spacer = document.querySelector('#spacer');

window.onresize = headerCheck;
window.onload = initCheck;

function initCheck() {
    headerCheck();
    window.scrollTo(0, 0);
}

function headerCheck() {
    var x = header.clientHeight;
    spacer.style.height = x+'px';
}