//get date for footer
var current = new Date();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = day[current.getDay()] +
    ", " + current.getDate() + " " + month[current.getMonth()] + " " +
    current.getFullYear();


//make toggle menu for small view
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
    nav.classList.toggle('responsive')
}, false);

window.onresize = () => {
    if (window.innerWidth > 650) nav.classList.remove('responsive')
};


//show pancake breakfast event on friday
if (current.getDay() == 5) {
    document.getElementById("event").style.display = "block";
}

//show the level of the storm range severity
function adjustNumber(stormseverity) {
    document.getElementById("stormvalue").innerHTML = stormseverity;
}