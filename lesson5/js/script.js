var current = new Date();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = day[current.getDay()] +
    ", " + current.getDate() + " " + month[current.getMonth()] + " " +
    current.getFullYear();



const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
    nav.classList.toggle('responsive')
}, false);

window.onresize = () => {
    if (window.innerWidth > 650) nav.classList.remove('responsive')
};



if (current.getDay() == 5) {
    document.getElementById("event").style.display = "block";
}