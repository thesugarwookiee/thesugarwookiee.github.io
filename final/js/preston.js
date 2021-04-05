//show pancake breakfast event on friday
if (current.getDay() == 5) {
    document.getElementById("event").style.display = "block";
}

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const city = jsonObject['towns'];
        const presfilter = city.filter(x => x.name == 'Preston');

        let presEvents = presfilter[0].events;
        let ul = document.createElement('ul');

        presEvents.forEach(info => {
            let listItem = document.createElement('li');
            listItem.innerHTML = info;
            ul.appendChild(listItem);
        });

        document.getElementById("events").appendChild(ul);
    });