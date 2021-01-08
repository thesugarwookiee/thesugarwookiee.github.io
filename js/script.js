window.onload = function getYear() {
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
}

window.onload = function modified() {
    let lastModif = new Date(document.lastModified);
    document.getElementById("mod").innerHTML = lastModif;
}