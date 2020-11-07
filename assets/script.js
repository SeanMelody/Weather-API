// Variable search for when a past search button is pressed, to re-run the function
var searchCity = document.querySelector("#search-city")
// On past search button click, re-run function with value from the button pressed
searchCity.addEventListener("click", function () {
    var city = document.querySelector(".city").value
    citySearch(city)
})

// Main function to get the current weather and the 5 day forecast
function citySearch(input) {
    // save city searched to local storage
    localStorage.setItem('city', input)
    // API search for current weather, with input being taken from the search box
    var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107`;
    // Fetch Request for the current weather
    fetch(requestUrl, {

        method: "GET",
        credentials: "same-origin",
        redirect: "follow",
        cache: "reload",
    })
        // return to json format
        .then(function (response) {
            return response.json();
        })
        // create an object for the data
        .then(function (data) {
            console.log(data);
            // If statement to check to make sure a real city is searched
            if (data.cod !== "404") {

                // variable for the current conditions city name ID
                var mainCityName = document.querySelector("#main-city-name");

                // Using jQuery to add the icon
                var iconCode = data.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"
                $('#weatherIcon').attr('src', iconUrl);

                // variable for the current temperature ID
                var mainTemp = document.querySelector("#main-temp");
                // variable for the current humidity ID
                var mainHumidity = document.querySelector("#main-humidity");
                // variable for the current Wind Speed
                var mainWindSpeed = document.querySelector("#main-wind-speed");
                // printing the name of the current city and the date
                mainCityName.textContent = data.name + " " + (moment().format('MM[/]D[/]yyyy'))

                // print the current temperature to the page
                mainTemp.textContent = `Temperature: ${data.main.temp} \u00B0F`
                // print the current humditiy to the page
                mainHumidity.textContent = `Humidity: ${data.main.humidity}%`
                // print the current wind speed to the page
                mainWindSpeed.textContent = `Wind Speed: ${data.wind.speed} MPH`



                //   API search for 5 day forecast, with input being taken from the previous API search and taking the latitude and longitude from that city
                var requestFiveDay = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&exclude=minutely,hourly,alerts&appid=fd7013d34fa65ca951cba9b9f0dde107`;
                // Fetch request for the 5 day forecast
                fetch(requestFiveDay, {

                    method: "GET",
                    credentials: "same-origin",
                    redirect: "follow",
                    cache: "reload",
                })
                    // return in json format
                    .then(function (response) {
                        return response.json();
                    })
                    // turn into an object
                    .then(function (dataFiveDay) {
                        console.log(dataFiveDay);

                        // varialbe for the current UV Index
                        var mainUVIndex = document.querySelector("#main-uv-index")
                        // size of the UV index box
                        mainUVIndex.style.width = "125px";
                        mainUVIndex.style.height = "25px";
                        // set the text color of the UV Index box
                        mainUVIndex.style.color = "white";
                        // set border for the UV Index box
                        mainUVIndex.style.border = "1px solid #000000"
                        // set the text content for the UV Index Box
                        mainUVIndex.textContent = `UV Index: ${dataFiveDay.current.uvi}`

                        // Set the background color of the UV INdex Box
                        var uvColor = dataFiveDay.current.uvi
                        // green if a good UV Index
                        if (uvColor >= 0 && uvColor < 3) {
                            mainUVIndex.style.background = "green"
                        }
                        // yellow for a medium UV index and change the color of the text so it is readable
                        if (uvColor >= 3 && uvColor < 5) {
                            mainUVIndex.style.background = "yellow"
                            mainUVIndex.style.color = "black"
                        }
                        // orange for a high medium UV Index
                        if (uvColor >= 6 && uvColor < 7) {
                            mainUVIndex.style.background = "orange"
                        }
                        // red for if a bad UV Index
                        if (uvColor >= 8 && uvColor < 10) {
                            mainUVIndex.style.background = "red"
                        }
                        // violet for a very bad UV Index
                        if (uvColor >= 10) {
                            mainUVIndex.style.background = "violet"
                        }


                        //    Five Day forecast code starts here!


                        // DAY 1 of 5

                        // variable for the date for ID
                        var dayOneDate = document.querySelector("#day-one-date");
                        // variable to get the days Temperature ID
                        var dayOneTemp = document.querySelector("#day-one-temp");
                        // variable to get the days Humiditiy ID
                        var dayOneHumidity = document.querySelector("#day-one-humidity");

                        // Set the date of Day 1 of 5
                        dayOneDate.textContent = (moment().add(1, 'days').format('MM[/]D[/]yyyy'))
                        // Weather Icon using jQuery
                        var iconDayOne = dataFiveDay.daily[1].weather[0].icon;
                        var iconDayOneUrl = "http://openweathermap.org/img/w/" + iconDayOne + ".png"
                        $('#icon-one').attr('src', iconDayOneUrl);
                        // print the temperature to day 1
                        dayOneTemp.textContent = `Temp: ${dataFiveDay.daily[1].temp.day}  \u00B0F`
                        // print the humidity to day 1
                        dayOneHumidity.textContent = `Humidity: ${dataFiveDay.daily[1].humidity}%`


                        // DAY 2 of 5

                        // variable for the date for ID
                        var dayTwoDate = document.querySelector("#day-two-date");
                        // variable to get the days Temperature ID
                        var dayTwoTemp = document.querySelector("#day-two-temp");
                        // variable to get the days Humidity ID
                        var dayTwoHumidity = document.querySelector("#day-two-humidity");

                        // Set the date of day 2
                        dayTwoDate.textContent = (moment().add(2, 'days').format('MM[/]D[/]yyyy'))
                        // Weather Icon using jQuery
                        var iconDayTwo = dataFiveDay.daily[2].weather[0].icon;
                        var iconDayTwoUrl = "http://openweathermap.org/img/w/" + iconDayTwo + ".png"
                        $('#icon-two').attr('src', iconDayTwoUrl);
                        // print the temperature to day 2
                        dayTwoTemp.textContent = `Temp: ${dataFiveDay.daily[2].temp.day}  \u00B0F`
                        // print the humidity to day 2
                        dayTwoHumidity.textContent = `Humidity: ${dataFiveDay.daily[2].humidity}%`


                        // DAY 3 of 5

                        // variable for the date for ID
                        var dayThreeDate = document.querySelector("#day-three-date");
                        // variable to get the days Temperature ID
                        var dayThreeTemp = document.querySelector("#day-three-temp");
                        // variable to get the days Humidity ID
                        var dayThreeHumidity = document.querySelector("#day-three-humidity");

                        // Set the date of day 3
                        dayThreeDate.textContent = (moment().add(3, 'days').format('MM[/]D[/]yyyy'))
                        // Weather Icon using jQuery
                        var iconDayThree = dataFiveDay.daily[3].weather[0].icon;
                        var iconDayThreeUrl = "http://openweathermap.org/img/w/" + iconDayThree + ".png"
                        $('#icon-three').attr('src', iconDayThreeUrl);
                        // print the temperature to day 3
                        dayThreeTemp.textContent = `Temp: ${dataFiveDay.daily[3].temp.day}  \u00B0F`
                        // print the humidity to day 3
                        dayThreeHumidity.textContent = `Humidity: ${dataFiveDay.daily[3].humidity}%`

                        // DAY 4 of 5

                        // variable for the date for ID
                        var dayFourDate = document.querySelector("#day-four-date");
                        // variable to get the days Temperature ID
                        var dayFourTemp = document.querySelector("#day-four-temp");
                        // variable to get the days Humidity ID
                        var dayFourHumidity = document.querySelector("#day-four-humidity");

                        // Set the date of day 4
                        dayFourDate.textContent = (moment().add(4, 'days').format('MM[/]D[/]yyyy'))
                        // Weather Icon using jQuery
                        var iconDayFour = dataFiveDay.daily[3].weather[0].icon;
                        var iconDayFourUrl = "http://openweathermap.org/img/w/" + iconDayFour + ".png"
                        $('#icon-four').attr('src', iconDayFourUrl);

                        // print the temperature to day 4
                        dayFourTemp.textContent = `Temp: ${dataFiveDay.daily[4].temp.day}  \u00B0F`
                        // print the humidity to day 4
                        dayFourHumidity.textContent = `Humidity: ${dataFiveDay.daily[4].humidity}%`

                        // DAY 5 of 5

                        // variable for the date for ID
                        var dayFiveDate = document.querySelector("#day-five-date");
                        // variable to get the days Temperature ID
                        var dayFiveTemp = document.querySelector("#day-five-temp");
                        // variable to get the days Humidity ID
                        var dayFiveHumidity = document.querySelector("#day-five-humidity");

                        // Set the date of day 5
                        dayFiveDate.textContent = (moment().add(5, 'days').format('MM[/]D[/]yyyy'))
                        // Weather Icon using jQuery
                        var iconDayFive = dataFiveDay.daily[4].weather[0].icon;
                        var iconDayFiveUrl = "http://openweathermap.org/img/w/" + iconDayFive + ".png"
                        $('#icon-five').attr('src', iconDayFiveUrl);

                        // print the temperature to day 5
                        dayFiveTemp.textContent = `Temp: ${dataFiveDay.daily[5].temp.day}  \u00B0F`
                        // print the humidity to day 5
                        dayFiveHumidity.textContent = `Humidity: ${dataFiveDay.daily[5].humidity}%`


                        // Set the past searches to a button on the left side of the page
                        var search1 = document.createElement("button");
                        // Add classes to the past search buttons
                        search1.classList.add("past")
                        search1.classList.add("btn-light")
                        search1.classList.add("button")
                        // put the city searched into the button
                        search1.innerHTML = input;
                        // append
                        document.querySelector(".past-searches").appendChild(search1);

                        // Function to turn the past searches into buttons
                        search1.onclick = function () {
                            // set the newCity variable
                            var newCity = search1.textContent
                            localStorage.setItem('new search', newCity)
                            citySearch(newCity)

                        };

                    })

                // else statement for if not a valid city, and receive a 404 error
            } else {
                // Change input Box to say "Search Again"
                placeCity = document.querySelector("#place-city");
                placeCity.value = "Search Again"
                // append the list that their search was not a city
                var search1 = document.createElement("li");
                // classes to the list
                search1.classList.add("past")
                search1.classList.add("btn-light")
                search1.innerHTML = `"${input}" is not a valid city`;
                // append the list
                document.querySelector(".past-searches").appendChild(search1);


            }

        })

    // return City Search Function
    return (citySearch)
}
