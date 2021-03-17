const apiWeather = `https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&appid=11256484b2b104b0c4bb05797b326d5c`
const apiForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=11256484b2b104b0c4bb05797b326d5c`

fetch(apiWeather)
    .then((response) => response.json())
    .then((jsObject) => {
        let tmp = parseFloat(jsObject.main.temp);
        let spd = parseFloat(jsObject.wind.speed);
        let wind = "None";
        if (tmp <= 50 && spd >= 3) {
            let chill = (35.74 + (0.6215 * tmp)) - (35.75 * (Math.pow(spd, 0.16))) + (0.4275 * (tmp * (Math.pow(spd, 0.16))));
            wind = Math.round(chill) + "°F";
        };

        document.getElementById('current').innerHTML = jsObject.weather[0].description;
        document.getElementById('temp').innerHTML = Math.round(tmp) + "°F";
        document.getElementById('wind').innerHTML = wind;
        document.getElementById('speed').innerHTML = Math.round(spd) + " mph";
        document.getElementById('humid').innerHTML = jsObject.main.humidity + "%";
    });



fetch(apiForecast)
    .then((response) => response.json())
    .then((castObject) => {
        var forecast = castObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].dt_txt);
            const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
            const imgalt = forecast[day].weather[0].description;

            document.getElementById(`day${day+1}`).textContent = weekday[d.getDay()];
            document.getElementById(`cast${day+1}`).textContent = Math.round(forecast[day].main.temp) + "°F";
            document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', imgalt);
        }
    });