function getYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

function modified() {
    let lastModif = new Date(document.lastModified);
    document.getElementById("mod").innerHTML = lastModif;
}

function load() {
    getYear();
    modified();
  }
  
  window.onload = load;