const requestURL = 'json/directory.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (directory) {
        const places = directory['places'];

        for (let i = 0; i < places.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let web = document.createElement('a');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let logo = document.createElement('img');
            let brk = document.createElement('br');

            h2.textContent = places[i].name;
            web.textContent = places[i].web;
            address.textContent = '◉ ' + places[i].address;
            phone.textContent = '☏ ' + places[i].phone;
            logo.setAttribute('src', places[i].logo);
            logo.setAttribute('alt', places[i].name + ' logo');
            web.setAttribute('href', places[i].web);
            web.setAttribute('target', '_blank')
            web.setAttribute('rel', "noopener")

            card.appendChild(h2);
            card.appendChild(logo);
            card.appendChild(brk);
            card.appendChild(web);
            card.appendChild(address);
            card.appendChild(phone);
            document.querySelector('div.directory').appendChild(card);
        }
    });

var elements = document.getElementsByClassName("directory");
var i;

function listView() {
  for (i = 0; i < elements.length; i++) {
    document.querySelector(".directory").style.width = "400px";
    document.querySelector(".directory").style.display = "block";
  }
}

function gridView() {
  for (i = 0; i < elements.length; i++) {
    document.querySelector(".directory").style.width = "100%";
    document.querySelector(".directory").style.display = "grid";  
  }
}