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


//show wind chill if applicable in weather summary
var tmp = parseInt(document.getElementById("temp").innerText);
var spd = parseInt(document.getElementById("speed").innerText);

var chill = 35.74 + 0.6215 * tmp - 35.75 * Math.pow(spd, 0.16) + 0.4275 * tmp * Math.pow(spd, 0.16);
chill = chill.toFixed(0);

if ((tmp > 50) || (spd < 3)) {
    document.getElementById("wind").innerHTML = "None";
} else {
    document.getElementById("wind").innerHTML = chill + "&deg;F";
}

//show the level of the storm range severity
function adjustNumber(stormseverity) {
    document.getElementById("stormvalue").innerHTML = stormseverity;
}