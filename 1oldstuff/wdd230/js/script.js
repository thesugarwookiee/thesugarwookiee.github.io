function getYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

function modified() {
    let lastMod = new Date(document.lastModified);
    document.getElementById("mod").innerHTML = lastMod;
}

function load() {
    getYear();
    modified();
}

window.onload = load;