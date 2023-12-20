const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('fa-x')
    navlist.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('fa-x')
    navlist.classList.remove('open')
};

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
});


sr.reveal ('.home-text',{Delay:300});
sr.reveal ('.home-img',{Delay:400});
sr.reveal ('.container',{Delay:400});

sr.reveal ('.about-img',{});
sr.reveal ('.about-text',{Delay:300});

sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn,.shop-content',{Delay:300});

sr.reveal ('.review-content,.contact',{Delay:400});