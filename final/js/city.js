const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const cities = jsonObject['towns'];
    function filterByName(item) {
      if (item.name == "Preston" || item.name == "Soda Springs" || item.name == "Fish Haven") {
        return true;
      }
    };

    let singleCity = cities.filter(filterByName);

    for (let i = 0; i < singleCity.length; i++) {
      let place = document.createElement('section');
      let cityInfo = document.createElement('div');
      cityInfo.setAttribute('class', 'cityInfo');
      let photo = document.createElement('img');
      let name = document.createElement('h3');
      let motto = document.createElement('h4');
      let yearFounded = document.createElement('div');
      let foundedNum = document.createElement('p');
      let currentPop = document.createElement('div');
      let popNum = document.createElement('p');
      let averageRain = document.createElement('div');
      let rainNum = document.createElement('p');

      name.textContent = singleCity[i].name;
      motto.textContent = singleCity[i].motto;
      foundedNum.textContent = "Year Founded: " + singleCity[i].yearFounded;
      popNum.textContent = "Population: " + singleCity[i].currentPopulation;
      rainNum.textContent = "Average rainfall: " + singleCity[i].averageRainfall + "\"";
      photo.setAttribute('src', "images/" + singleCity[i].photo);
      photo.setAttribute('alt', "A scenic image of " + singleCity[i].name);

      place.appendChild(photo);
      place.appendChild(cityInfo);
      cityInfo.appendChild(name);
      cityInfo.appendChild(motto);
      cityInfo.appendChild(yearFounded);
      yearFounded.appendChild(foundedNum);
      cityInfo.appendChild(currentPop);
      currentPop.appendChild(popNum);
      cityInfo.appendChild(averageRain);
      averageRain.appendChild(rainNum);
      document.querySelector('div.cities').appendChild(place);
    }
  });