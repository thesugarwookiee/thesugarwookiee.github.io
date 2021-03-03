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