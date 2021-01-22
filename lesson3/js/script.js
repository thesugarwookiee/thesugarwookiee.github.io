function getYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

function load() {
    getYear();
  }

window.onload = load;