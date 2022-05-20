//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const closeButton = document.querySelector('#close');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

closeButton.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//navbar fix
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        header.classList.remove('xs:bg-transparent');
    } else {
        header.classList.remove('navbar-fixed');
        header.classList.add('xs:bg-transparent');
    }
};

const nameForm = document.querySelector('#name');


nameForm.addEventListener('focus',function(){
    const label = document.querySelector('label');

    label.classList.remove('group-hover:w-1/4');
    label.classList.add('w-1/4')
});

const emailForm = document.querySelector('#email');

emailForm.addEventListener('focus',function(){
    const label = document.querySelector('#emaillabel');

    label.classList.remove('group-hover:w-1/4');
    label.classList.add('w-1/4')
});

const messageForm = document.querySelector('#message');

messageForm.addEventListener('click',function(){
    const label = document.querySelector('#msglabel');

    label.classList.remove('group-hover:w-1/4');
    label.classList.add('w-1/4')
});

// if(nameForm.focus){
//     const label = document.querySelector('label');

//     label.classList.toggle('group-hover:w-1/4');
//     label.classList.toggle('w-1/4');
// } else {
//     const label = document.querySelector('label');

//     // label.classList.add('group-hover:w-1/4');
//     // label.classList.add('w-1/4');
// }