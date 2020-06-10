vid = document.getElementById("vid");
vid.disablePictureInPicture = true;

const hero_itself = document.querySelector('#hero');
const hero_img = document.querySelector('#hero-img');

window.onresize = headerCheck;
window.onload = initCheck;

function initCheck() {
    headerCheck();
    window.scrollTo(0, 0);
}

function headerCheck() {
    var x = hero_img.clientHeight;
    hero_itself.style.height = x+'px';
    console.log(hero_itself.style.height);
}

// Micro Interaction

const trash_icon = document.querySelectorAll('.icon-trash');
const trash_confirmation = document.querySelector('#trash-confirm');
const modal_backdrop = document.querySelector('#modal-backdrop');
const trash_no = document.querySelector('#trash-no');
const trash_yes = document.querySelector('#trash-yes');

for (let i = 0; i < 4; i++) {
        trash_icon[i].addEventListener('click', () => {
        about_to_delete = trash_icon[i].parentNode.parentNode.parentNode;
        open_modal();
    });
};

trash_no.addEventListener('click', close_modal);
trash_yes.addEventListener('click', delete_card);

modal_backdrop.addEventListener('click', close_modal);

function close_modal() {
    modal_backdrop.style.opacity = "0";
    trash_confirmation.style.opacity = "0";
    setTimeout(function(){
        modal_backdrop.style.display = "none";
        trash_confirmation.style.display = "none";
        },200);
}

function open_modal() {
    modal_backdrop.style.display = "inline";
    trash_confirmation.style.display = "inline";
    setTimeout(function(){
        modal_backdrop.style.opacity = ".9";
        trash_confirmation.style.opacity = "1";
        },200);
}

function delete_card() {
    about_to_delete.remove();
    close_modal();
    cardQtyCheck();
}

const microint_container = document.querySelector('#microint-container');

function cardQtyCheck() {
    if (microint_container.children.length == 0) {
        var para = document.createElement('P');
        var t = document.createTextNode('No documents to display');
        para.appendChild(t);
        para.setAttribute('id', 'no-docs-p');
        microint_container.appendChild(para);
    }
}

const tabs = document.querySelectorAll('.tab');
const speech_bubble = document.querySelectorAll('.speech-bubble');

for (let i = 0; i < 4; i++) {
    tabs[i].addEventListener('mouseenter', () => {
        setTimeout(function(){
            speech_bubble[i].style.opacity = "1";
            },250);
            setTimeout(function(){
                speech_bubble[i].style.opacity = "0";
                },3000);
    });
};

for (let i = 0; i < 4; i++) {
    tabs[i].addEventListener('mouseout', () => {
        speech_bubble[i].style.opacity = "0";
});
};