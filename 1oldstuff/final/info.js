//get stuff from the api

// fetch('https://api.quotable.io/random')
//   .then(response => response.json())
//   .then(data => console.log(data));

async function updateQuote() {
    // fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        // update HTML
        document.getElementById("quote").innerHTML = data.content;
        document.getElementById("author").innerHTML = "★ " + data.author;
    } else {
        document.getElementById("quote").innerHTML = "An error occured";
        console.log(data);
    }
}

document.addEventListener("onload", updateQuote());

// Attach an event listener to the `button`
const button = document.querySelector("button");
button.addEventListener("click", updateQuote);