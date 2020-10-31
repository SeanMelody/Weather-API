console.log("Hi!")

var weatherCity = document.querySelector(".weather-city");
// var fetchButton = document.querySelector(".get-weather");

// function getWeather() {
var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=94965&units=imperial&appid=fd7013d34fa65ca951cba9b9f0dde107';

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

        // DAY 1 of 5
        // var dayOneTemp = document.querySelector("#day-one-temp");
        // var dayTwoTemp = document.querySelector("#day-two-temp");
        // var dayThreeTemp = document.querySelector("#day-three-temp");
        // var dayFourTemp = document.querySelector("#day-four-temp");
        // var dayFiveTemp = document.querySelector("#day-five-temp");
        var dayOneDate = document.querySelector("#day-one-date");
        var dayOneDescription = document.querySelector("#day-one-description");
        var dayOneIcon = document.querySelector("#day-one-icon");
        var dayOneTemp = document.querySelector("#day-one-temp");
        var dayOneHumidity = document.querySelector("#day-one-humidity");

        dayOneDate.textContent = data.list[0].dt_txt
        dayOneDescription.textContent = data.list[0].weather[0].description
        dayOneIcon.textContent = data.list[0].weather[0].icon
        dayOneTemp.textContent = data.list[0].main.temp
        dayOneHumidity.textContent = data.list[0].main.humidity

        // dayTwoTemp.textContent = data.list[2].main.temp
        // dayThreeTemp.textContent = data.list[3].main.temp
        // dayFourTemp.textContent = data.list[4].main.temp
        // dayFiveTemp.textContent = data.list[5].main.temp

        // DAY 2 of 5
        var dayTwoDate = document.querySelector("#day-two-date");
        var dayTwoIcon = document.querySelector("#day-two-icon");
        var dayTwoTemp = document.querySelector("#day-two-temp");
        var dayTwoHumidity = document.querySelector("#day-two-humidity");

        dayTwoDate.textContent = data.list[1].dt_txt
        // dayTwoDescription.textContent = data.list[1].weather[0].description
        dayTwoIcon.textContent = data.list[1].weather[0].icon
        dayTwoTemp.textContent = data.list[1].main.temp
        dayTwoHumidity.textContent = data.list[1].main.humidity


        // DAY 3 of 5
        var dayThreeDate = document.querySelector("#day-three-date");
        var dayThreeIcon = document.querySelector("#day-three-icon");
        var dayThreeTemp = document.querySelector("#day-three-temp");
        var dayThreeHumidity = document.querySelector("#day-three-humidity");

        dayThreeDate.textContent = data.list[2].dt_txt
        // dayThreeDescription.textContent = data.list[2].weather[0].description
        dayThreeIcon.textContent = data.list[2].weather[0].icon
        dayThreeTemp.textContent = data.list[2].main.temp
        dayThreeHumidity.textContent = data.list[2].main.humidity

        // DAY 4 of 5
        var dayFourDate = document.querySelector("#day-four-date");
        var dayFourIcon = document.querySelector("#day-four-icon");
        var dayFourTemp = document.querySelector("#day-four-temp");
        var dayFourHumidity = document.querySelector("#day-four-humidity");

        dayFourDate.textContent = data.list[3].dt_txt
        // dayFourDescription.textContent = data.list[3].weather[0].description
        dayFourIcon.textContent = data.list[3].weather[0].icon
        dayFourTemp.textContent = data.list[3].main.temp
        dayFourHumidity.textContent = data.list[3].main.humidity

        // DAY 5 of 5
        var dayFiveDate = document.querySelector("#day-five-date");
        var dayFiveIcon = document.querySelector("#day-five-icon");
        var dayFiveTemp = document.querySelector("#day-five-temp");
        var dayFiveHumidity = document.querySelector("#day-five-humidity");

        dayFiveDate.textContent = data.list[4].dt_txt
        // dayFiveDescription.textContent = data.list[4].weather[0].description
        dayFiveIcon.textContent = data.list[4].weather[0].icon
        dayFiveTemp.textContent = data.list[4].main.temp
        dayFiveHumidity.textContent = data.list[4].main.humidity

    })
// })
// }


// fetchButton.addEventListener('click', getWeather);

// Austin TX On Click Test
// object.addEventListener("click", myScript);
// fucntion AustinTX()
function austinTX() {
    // let austinTXAlert = alert("Austin TX Pressed");

    var weatherCity = document.querySelector(".weather-city");
    // var fetchButton = document.querySelector(".get-weather");

    // function getWeather() {
    var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=78701&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107';

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

            // DAY 1 of 5
            // var dayOneTemp = document.querySelector("#day-one-temp");
            // var dayTwoTemp = document.querySelector("#day-two-temp");
            // var dayThreeTemp = document.querySelector("#day-three-temp");
            // var dayFourTemp = document.querySelector("#day-four-temp");
            // var dayFiveTemp = document.querySelector("#day-five-temp");
            var dayOneDate = document.querySelector("#day-one-date");
            var dayOneDescription = document.querySelector("#day-one-description");
            var dayOneIcon = document.querySelector("#day-one-icon");
            var dayOneTemp = document.querySelector("#day-one-temp");
            var dayOneHumidity = document.querySelector("#day-one-humidity");

            dayOneDate.textContent = data.list[0].dt_txt
            dayOneDescription.textContent = data.list[0].weather[0].description
            dayOneIcon.textContent = data.list[0].weather[0].icon
            dayOneTemp.textContent = data.list[0].main.temp
            dayOneHumidity.textContent = data.list[0].main.humidity

            // dayTwoTemp.textContent = data.list[2].main.temp
            // dayThreeTemp.textContent = data.list[3].main.temp
            // dayFourTemp.textContent = data.list[4].main.temp
            // dayFiveTemp.textContent = data.list[5].main.temp

            // DAY 2 of 5
            var dayTwoDate = document.querySelector("#day-two-date");
            var dayTwoIcon = document.querySelector("#day-two-icon");
            var dayTwoTemp = document.querySelector("#day-two-temp");
            var dayTwoHumidity = document.querySelector("#day-two-humidity");

            dayTwoDate.textContent = data.list[1].dt_txt
            // dayTwoDescription.textContent = data.list[1].weather[0].description
            dayTwoIcon.textContent = data.list[1].weather[0].icon
            dayTwoTemp.textContent = data.list[1].main.temp
            dayTwoHumidity.textContent = data.list[1].main.humidity


            // DAY 3 of 5
            var dayThreeDate = document.querySelector("#day-three-date");
            var dayThreeIcon = document.querySelector("#day-three-icon");
            var dayThreeTemp = document.querySelector("#day-three-temp");
            var dayThreeHumidity = document.querySelector("#day-three-humidity");

            dayThreeDate.textContent = data.list[2].dt_txt
            // dayThreeDescription.textContent = data.list[2].weather[0].description
            dayThreeIcon.textContent = data.list[2].weather[0].icon
            dayThreeTemp.textContent = data.list[2].main.temp
            dayThreeHumidity.textContent = data.list[2].main.humidity

            // DAY 4 of 5
            var dayFourDate = document.querySelector("#day-four-date");
            var dayFourIcon = document.querySelector("#day-four-icon");
            var dayFourTemp = document.querySelector("#day-four-temp");
            var dayFourHumidity = document.querySelector("#day-four-humidity");

            dayFourDate.textContent = data.list[3].dt_txt
            // dayFourDescription.textContent = data.list[3].weather[0].description
            dayFourIcon.textContent = data.list[3].weather[0].icon
            dayFourTemp.textContent = data.list[3].main.temp
            dayFourHumidity.textContent = data.list[3].main.humidity

            // DAY 5 of 5
            var dayFiveDate = document.querySelector("#day-five-date");
            var dayFiveIcon = document.querySelector("#day-five-icon");
            var dayFiveTemp = document.querySelector("#day-five-temp");
            var dayFiveHumidity = document.querySelector("#day-five-humidity");

            dayFiveDate.textContent = data.list[4].dt_txt
            // dayFiveDescription.textContent = data.list[4].weather[0].description
            dayFiveIcon.textContent = data.list[4].weather[0].icon
            dayFiveTemp.textContent = data.list[4].main.temp
            dayFiveHumidity.textContent = data.list[4].main.humidity

        })

    return (austinTX)
}