const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=21.4508&lon=-158.0096&units=imperial&appid=11256484b2b104b0c4bb05797b326d5c';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('current').textContent = jsObject.current.weather[0].description;
        const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.current.weather[0].icon + '@2x.png';
        const imgalt = jsObject.current.weather[0].description;

        document.getElementById('temp').textContent = Math.round(jsObject.current.temp) + "°F";
        document.getElementById('humid').textContent = jsObject.current.humidity + "%";
        document.getElementById('currenticon').setAttribute('src', imagesrc);
        document.getElementById('currenticon').setAttribute('alt', imgalt);

        var forecast = jsObject.daily.slice(1, 4);
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].dt * 1000);
            const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
            const desc = forecast[day].weather[0].description;

            document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`cast${day+1}`).textContent = Math.round(forecast[day].temp.max) + "°F";
            document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
        }

        if (jsObject.hasOwnProperty('alerts')) {
            document.querySelector('.walert').style.display = 'block';
            document.getElementById('alert').innerHTML = jsObject.alerts[0].event;
            document.getElementById('alertinfo').innerHTML = jsObject.alerts[0].description;
        } else {
            document.querySelector('.walert').style.display = 'none';
        }
    });