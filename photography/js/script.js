//make toggle menu for small view
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
    nav.classList.toggle('toggle')
}, false);

window.onresize = () => {
    if (window.innerWidth > 650) nav.classList.remove('toggle')
};