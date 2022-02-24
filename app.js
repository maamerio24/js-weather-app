let apiSearch = document.querySelector('#search_city')
let cityName = document.querySelector('.city_name')
let cityTemp = document.querySelector('.temp')
let description = document.querySelector('.description')
let maxTemp = document.querySelector('.temp-max')
let minTemp = document.querySelector('.temp-min')
let humidity = document.querySelector('.humidity')
let cityChoice = document.querySelector('#submit')

const apiKey = 'bd7fc98b560fee6ecf18a6870dc91dc8'

let form = document.querySelector(".apiSearch");

apiSearch.addEventListener( 'submit', (e) => {
    e.preventDefault();
    const city = cityChoice.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
        .then(response => { return response.json()})
        .then(data => {console.log(data)
            let cityNameValue = data.name;
            let cityTempValue = data.main.temp;
            let descriptionValue = data.weather[0].description;
            let maxTempValue = data.main.temp_max;
            let minTempValue = data.main.temp_min;
            let humidityValue = data.main.humidity;

            cityName.innerHTML = cityNameValue;
            cityTemp.innerHTML = 'Current Temp: ' + cityTempValue + '°F';
            description.innerHTML = descriptionValue.toUpperCase();
            maxTemp.innerHTML = 'Max Temp: ' + maxTempValue + '°F';
            minTemp.innerHTML = 'Min Temp : ' + minTempValue + '°F';
            humidity.innerHTML = 'Humidity: ' + humidityValue + '%';


    })})
    .catch (err => alert("wrong city name!"));
        