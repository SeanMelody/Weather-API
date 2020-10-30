console.log("Hi!")

var weatherMain = document.querySelector(".weather-main");
var fetchButton = document.querySelector(".get-weather");

// function getWeather() {
var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=94965&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107';

fetch(requestUrl, {

    method: "GET",
    credentials: "same-origin",
    redirect: "follow",
    cache: "reload",
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        // for (var i = 0; i < data.length; i++) {
        var mainCityName = document.querySelector("#main-city-name");
        var mainCurrentConditions = document.querySelector("#main-current-conditions");
        var mainTemp = document.querySelector("#main-temp");
        var mainHumidity = document.querySelector("#main-humidity");
        var mainWindSpeed = document.querySelector("#main-wind-speed");
        var mainUvIndex = document.querySelector("#main-uv-index");
        var mainAirQuality = document.querySelector("#main-air-quality");
        var mainCurrentDAy = document.querySelector("#main-current-day")
        mainCityName.textContent = data.city.name
        mainCurrentConditions.textContent = data.list[0].weather[0].description
        mainCurrentDAy.textContent = data.list[0].dt_txt

        mainTemp.textContent = `The current temperature is: ${data.list[0].main.temp} degrees farenheight`
        mainHumidity.textContent = `The current humidity is: ${data.list[0].main.humidity}`
        mainWindSpeed.textContent = `current wind speed: ${data.list[0].wind.speed} mph`
        mainUvIndex.textContent = `icon: ${data.list[0].clouds}`
        mainAirQuality.textContent = `sunrise is at: ${data.city.sunrise}`
        console.log(mainCityName)
        console.log(mainCurrentConditions)
        //     var userName = document.createElement('h3');
        //     var issueTitle = document.createElement('h4');
        //     var issueBody = document.createElement('p');
        //     userName.textContent = data[i].user.login;
        //     issueTitle.textContent = data[i].title;
        //     issueBody.textContent = data[i].body;
        //     issueContainer.append(userName);
        //     issueContainer.append(issueTitle);
        //     issueContainer.append(issueBody);
        // }

        var dayOne = document.querySelector(".day-one");
        var dayTwo = document.querySelector(".day-two");
        var dayThree = document.querySelector(".day-three");
        var dayFour = document.querySelector(".day-four");
        var dayFive = document.querySelector(".day-five");

        dayOne.textContent = data.list[1].main.temp
        dayTwo.textContent = data.list[2].main.temp
        dayThree.textContent = data.list[3].main.temp
        dayFour.textContent = data.list[4].main.temp
        dayFive.textContent = data.list[5].main.temp
    })
// }


// fetchButton.addEventListener('click', getWeather);