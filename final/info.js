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
      quote.textContent = data.content;
      cite.textContent = data.author;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }