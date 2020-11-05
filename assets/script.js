console.log("Hi!")

// var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=sausalito&units=imperial&appid=fd7013d34fa65ca951cba9b9f0dde107';
// var requestFiveDay = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.8591&lon=122.4853&units=imperial&exclude=mimutely,hourly,alerts&appid=fd7013d34fa65ca951cba9b9f0dde107';



function citySearch() {



    // function getWeather() {
    var city = document.querySelector(".city").value
    // if (zip.length === 5 && zip !== Nan) {



    var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107`;

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
            if (data.cod !== "404") {




                var mainCityName = document.querySelector("#main-city-name");

                // Jquery add the icon
                var iconcode = data.weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"
                $('#wicon').attr('src', iconurl);


                var mainTemp = document.querySelector("#main-temp");
                var mainHumidity = document.querySelector("#main-humidity");
                var mainWindSpeed = document.querySelector("#main-wind-speed");
                // var mainUvIndex = document.querySelector("#main-uv-index");

                mainCityName.textContent = data.name + " " + (moment().format('MM[/]D[/]yyyy'))

                var mainImage = document.querySelector("#main-image");

                mainTemp.textContent = `Temperature: ${data.main.temp} \u00B0F`
                mainHumidity.textContent = `Humidity: ${data.main.humidity}%`
                mainWindSpeed.textContent = `Wind Speed: ${data.wind.speed} MPH`




                var requestFiveDay = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&exclude=minutely,hourly,alerts&appid=fd7013d34fa65ca951cba9b9f0dde107`;

                fetch(requestFiveDay, {

                    method: "GET",
                    credentials: "same-origin",
                    redirect: "follow",
                    cache: "reload",
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (dataFiveDay) {
                        console.log(dataFiveDay);



                        // var mainTest = document.createElement("div");
                        var mainTest = document.querySelector("#main-uv-index")
                        mainTest.style.width = "125px";
                        mainTest.style.height = "25px";
                        // mainTest.style.background = "blue";
                        mainTest.style.color = "white";
                        mainTest.style.border = "1px solid #000000"
                        mainTest.textContent = `UV Index: ${dataFiveDay.current.uvi}`
                        var uvColor = dataFiveDay.current.uvi
                        if (uvColor >= 0 && uvColor < 3) {
                            mainTest.style.background = "green"
                        }
                        if (uvColor >= 3 && uvColor < 5) {
                            mainTest.style.background = "yellow"
                            mainTest.style.color = "black"
                        }
                        if (uvColor >= 6 && uvColor < 7) {
                            mainTest.style.background = "orange"
                        }
                        if (uvColor >= 8 && uvColor < 10) {
                            mainTest.style.background = "red"
                        }
                        if (uvColor >= 10) {
                            mainTest.style.background = "yellow"
                        }


                        // document.querySelector(".weather-city").appendChild(mainTest);

                        // DAY 1 of 5

                        var dayOneDate = document.querySelector("#day-one-date");
                        // var dayOneIcon = document.querySelector("#day-one-icon");
                        // var dayOneIcon = dataFiveDay.daily[0].weather[0].icon
                        // // daily[0].weather[0].icon
                        // var dayOneIconUrl = "http://openweathermap.org/img/w/" + dayOneIcon + ".png"
                        // $('#iconOne').attr('src', dayOneIconUrl);

                        var iconDayOne = dataFiveDay.daily[1].weather[0].icon;
                        var iconDayOneUrl = "http://openweathermap.org/img/w/" + iconDayOne + ".png"
                        $('#icon-one').attr('src', iconDayOneUrl);

                        var dayOneTemp = document.querySelector("#day-one-temp");
                        var dayOneHumidity = document.querySelector("#day-one-humidity");


                        dayOneDate.textContent = (moment().add(1, 'days').format('MM[/]D[/]yyyy'))

                        // dayOneIcon.textContent = dataFiveDay.daily[1].weather[0].id
                        dayOneTemp.textContent = `Temp: ${dataFiveDay.daily[1].temp.day}  \u00B0F`
                        dayOneHumidity.textContent = `Humidity: ${dataFiveDay.daily[1].humidity}%`


                        // DAY 2 of 5
                        var dayTwoDate = document.querySelector("#day-two-date");
                        // var dayTwoIcon = document.querySelector("#day-two-icon");

                        var dayTwoTemp = document.querySelector("#day-two-temp");
                        var dayTwoHumidity = document.querySelector("#day-two-humidity");

                        dayTwoDate.textContent = (moment().add(2, 'days').format('MM[/]D[/]yyyy'))

                        var iconDayTwo = dataFiveDay.daily[2].weather[0].icon;
                        var iconDayTwoUrl = "http://openweathermap.org/img/w/" + iconDayTwo + ".png"
                        $('#icon-two').attr('src', iconDayTwoUrl);


                        // dayTwoIcon.textContent = dataFiveDay.daily[2].weather[0].icon
                        dayTwoTemp.textContent = `Temp: ${dataFiveDay.daily[2].temp.day}  \u00B0F`
                        dayTwoHumidity.textContent = `Humidity: ${dataFiveDay.daily[2].humidity}%`


                        // DAY 3 of 5
                        var dayThreeDate = document.querySelector("#day-three-date");
                        // var dayThreeIcon = document.querySelector("#day-three-icon");

                        var dayThreeTemp = document.querySelector("#day-three-temp");
                        var dayThreeHumidity = document.querySelector("#day-three-humidity");


                        dayThreeDate.textContent = (moment().add(3, 'days').format('MM[/]D[/]yyyy'))

                        var iconDayThree = dataFiveDay.daily[3].weather[0].icon;
                        var iconDayThreeUrl = "http://openweathermap.org/img/w/" + iconDayThree + ".png"
                        $('#icon-three').attr('src', iconDayThreeUrl);


                        // dayThreeIcon.textContent = dataFiveDay.daily[3].weather[0].icon
                        dayThreeTemp.textContent = `Temp: ${dataFiveDay.daily[3].temp.day}  \u00B0F`
                        dayThreeHumidity.textContent = `Humidity: ${dataFiveDay.daily[3].humidity}%`

                        // DAY 4 of 5
                        var dayFourDate = document.querySelector("#day-four-date");
                        // var dayFourIcon = document.querySelector("#day-four-icon");


                        var dayFourTemp = document.querySelector("#day-four-temp");
                        var dayFourHumidity = document.querySelector("#day-four-humidity");


                        dayFourDate.textContent = (moment().add(4, 'days').format('MM[/]D[/]yyyy'))

                        var iconDayFour = dataFiveDay.daily[3].weather[0].icon;
                        var iconDayFourUrl = "http://openweathermap.org/img/w/" + iconDayFour + ".png"
                        $('#icon-four').attr('src', iconDayFourUrl);

                        // dayFourIcon.textContent = dataFiveDay.daily[4].weather[0].icon
                        dayFourTemp.textContent = `Temp: ${dataFiveDay.daily[4].temp.day}  \u00B0F`
                        dayFourHumidity.textContent = `Humidity: ${dataFiveDay.daily[4].humidity}%`

                        // DAY 5 of 5
                        var dayFiveDate = document.querySelector("#day-five-date");
                        // var dayFiveIcon = document.querySelector("#day-five-icon");

                        var dayFiveTemp = document.querySelector("#day-five-temp");
                        var dayFiveHumidity = document.querySelector("#day-five-humidity");


                        dayFiveDate.textContent = (moment().add(5, 'days').format('MM[/]D[/]yyyy'))

                        var iconDayFive = dataFiveDay.daily[4].weather[0].icon;
                        var iconDayFiveUrl = "http://openweathermap.org/img/w/" + iconDayFive + ".png"
                        $('#icon-five').attr('src', iconDayFiveUrl);

                        // dayFiveIcon.textContent = dataFiveDay.daily[5].weather[0].icon
                        dayFiveTemp.textContent = `Temp: ${dataFiveDay.daily[5].temp.day}  \u00B0F`
                        dayFiveHumidity.textContent = `Humidity: ${dataFiveDay.daily[5].humidity}%`



                        var search1 = document.createElement("button");
                        search1.classList.add("past")
                        search1.classList.add("btn-light")
                        search1.classList.add("button")

                        search1.innerHTML = city;
                        document.querySelector(".past-searches").appendChild(search1);

                        search1.onclick = function () {
                            // alert(search1)
                            // alert(search1.textContent)
                            var newCity = search1.textContent
                            alert(newCity)
                            // return (citySearch)
                        };


                        console.log(city)


                    })


            } else {

                // alert("must enter a valid zip code")
                placeCity = document.querySelector("#place-city");
                placeCity.value = "Search Again"
                var search1 = document.createElement("li");
                search1.classList.add("past")
                search1.classList.add("btn-light")
                search1.innerHTML = `"${city}" is not a valid city`;
                document.querySelector(".past-searches").appendChild(search1);


            }

            // search1.onclick = function () {
            //     alert(search1)
            //     alert(search1.textContent)
            //     alert(city)
            //     // citySearch(search1.textContent)
            // };

        })


    // search1.onclick = function () {
    //     // alert(search1)
    //     alert(search1.textContent)
    //     // citySearch(search1.textContent)
    // };








    // var search1 = document.createElement("button");
    // search1.classList.add("past")
    // search1.classList.add("btn-light")
    // search1.classList.add("button")

    // search1.innerHTML = city;
    // document.querySelector(".past-searches").appendChild(search1);

    // console.log(search1)


    return (citySearch)
}

// console.log(search1)


// var search1 = document.createElement("li");
// search1.style.width = "125px";
// search1.style.height = "50px";
// search1.style.background = "white";
// search1.style.color = "black";
// search1.style.border = "1px solid #000000";
// search1.innerHTML = `UV Index: ${city}`;
// document.querySelector(".past-searches").appendChild(search1);



// var myImg = document.getElementById("main-image")
// myImg.src = "./assets/icons/10d.png";
// // mainAirQuality.textContent = `sunrise is at: ${data.sys.sunrise * 1000}`
// console.log(mainCityName)
//             // console.log(mainCurrentConditions)
//         })
// }
// //     var userName = document.createElement('h3');
// //     var issueTitle = document.createElement('h4');
// //     var issueBody = document.createElement('p');
// //     userName.textContent = data[i].user.login;
// //     issueTitle.textContent = data[i].title;
// //     issueBody.textContent = data[i].body;
// //     issueContainer.append(userName);
// //     issueContainer.append(issueTitle);
// //     issueContainer.append(issueBody);
// // }

// var requestFiveDay = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.8591&lon=122.4853&units=imperial&exclude=current,minutely,hourly,alerts&appid=fd7013d34fa65ca951cba9b9f0dde107';
// fetch(requestFiveDay, {

//     method: "GET",
//     credentials: "same-origin",
//     redirect: "follow",
//     cache: "reload",
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);


//         // DAY 1 of 5

//         var dayOneDate = document.querySelector("#day-one-date");
//         var dayOneIcon = document.querySelector("#day-one-icon");
//         var dayOneTemp = document.querySelector("#day-one-temp");
//         var dayOneHumidity = document.querySelector("#day-one-humidity");


//         dayOneDate.textContent = (moment().add(1, 'days').format('MM[/]D[/]yyyy'))

//         dayOneIcon.textContent = data.daily[0].weather[0].icon
//         dayOneTemp.textContent = data.daily[0].temp.day
//         dayOneHumidity.textContent = data.daily[0].humidity


//         // DAY 2 of 5
//         var dayTwoDate = document.querySelector("#day-two-date");
//         var dayTwoIcon = document.querySelector("#day-two-icon");
//         var dayTwoTemp = document.querySelector("#day-two-temp");
//         var dayTwoHumidity = document.querySelector("#day-two-humidity");

//         dayTwoDate.textContent = (moment().add(2, 'days').format('MM[/]D[/]yyyy'))
//         dayTwoIcon.textContent = data.daily[1].weather[0].icon
//         dayTwoTemp.textContent = data.daily[1].temp.day
//         dayTwoHumidity.textContent = data.daily[1].humidity


//         // DAY 3 of 5
//         var dayThreeDate = document.querySelector("#day-three-date");
//         var dayThreeIcon = document.querySelector("#day-three-icon");
//         var dayThreeTemp = document.querySelector("#day-three-temp");
//         var dayThreeHumidity = document.querySelector("#day-three-humidity");


//         dayThreeDate.textContent = (moment().add(3, 'days').format('MM[/]D[/]yyyy'))
//         dayThreeIcon.textContent = data.daily[2].weather[0].icon
//         dayThreeTemp.textContent = data.daily[2].temp.day
//         dayThreeHumidity.textContent = data.daily[2].humidity

//         // DAY 4 of 5
//         var dayFourDate = document.querySelector("#day-four-date");
//         var dayFourIcon = document.querySelector("#day-four-icon");
//         var dayFourTemp = document.querySelector("#day-four-temp");
//         var dayFourHumidity = document.querySelector("#day-four-humidity");


//         dayFourDate.textContent = (moment().add(4, 'days').format('MM[/]D[/]yyyy'))
//         dayFourIcon.textContent = data.daily[3].weather[0].icon
//         dayFourTemp.textContent = data.daily[3].temp.day
//         dayFourHumidity.textContent = data.daily[3].humidity

//         // DAY 5 of 5
//         var dayFiveDate = document.querySelector("#day-five-date");
//         var dayFiveIcon = document.querySelector("#day-five-icon");
//         var dayFiveTemp = document.querySelector("#day-five-temp");
//         var dayFiveHumidity = document.querySelector("#day-five-humidity");


//         dayFiveDate.textContent = (moment().add(5, 'days').format('MM[/]D[/]yyyy'))
//         dayFiveIcon.textContent = data.daily[4].weather[0].icon
//         dayFiveTemp.textContent = data.daily[4].temp.day
//         dayFiveHumidity.textContent = data.daily[4].humidity


//     })


// function zipSearch() {



//     // function getWeather() {
//     var zip = document.querySelector(".zip").value
//     if (zip.length !== 5 && zip === NaN) {

//         var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=fd7013d34fa65ca951cba9b9f0dde107`
//         // var requestUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107`;
//         var requestFiveDay = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.8591&lon=122.4853&units=imperial&exclude=current,minutely,hourly,alerts&appid=fd7013d34fa65ca951cba9b9f0dde107';
//         fetch(requestUrl, {

//             method: "GET",
//             credentials: "same-origin",
//             redirect: "follow",
//             cache: "reload",
//         })
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                 console.log(data);


//                 var myImg = document.getElementById("main-image")
//                 myImg.src = "./assets/icons/10d.png";
//                 var mainCityName = document.querySelector("#main-city-name");
//                 var mainTemp = document.querySelector("#main-temp");
//                 var mainHumidity = document.querySelector("#main-humidity");
//                 var mainWindSpeed = document.querySelector("#main-wind-speed");
//                 var mainUvIndex = document.querySelector("#main-uv-index");

//                 mainCityName.textContent = data.name + " " + (moment().format('MM[/]D[/]yyyy'))
//                 mainCurrentConditions.textContent = data.weather[0].description

//                 var myImg = document.getElementById("main-image")
//                 myImg.src = "./assets/icons/10d.png";


//                 // });

//                 mainTemp.textContent = `Temperature: ${data.main.temp} \u00B0 farenheight`
//                 mainHumidity.textContent = `Humidity: ${data.main.humidity}`
//                 mainWindSpeed.textContent = `Wind Speed: ${data.wind.speed} MPH`
//                 mainUvIndex.textContent = `icon: ${data.weather[0].icon}`
//                 mainIcon = document.querySelector("#main-icon")
//                 var icon = data.weather[0].icon
//                 mainIcon.textContent = `http://openweathermap.org/img/w/${icon}.png`;
//                 // alert(mainIcon)
//                 var mainIconTest = document.querySelector("#main-icon-test");
//                 mainIconTest.style.height = "50px";
//                 mainIconTest.style.width = "50px";
//                 mainIconTest.style.backgroundImage = "url('http://openweathermap.org/img/w/01n.png')";
//                 // mainIconTest.src = url"(http://openweathermap.org/img/w/01n.png)"


//                 var myImg = document.getElementById("main-image")
//                 myImg.src = "./assets/icons/10d.png";
//                 // mainAirQuality.textContent = `sunrise is at: ${data.sys.sunrise * 1000}`
//                 console.log(mainCityName)
//                 console.log(mainCurrentConditions)
//             })
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

//         var requestFiveDay = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.8591&lon=122.4853&units=imperial&exclude=current,minutely,hourly,alerts&appid=fd7013d34fa65ca951cba9b9f0dde107';
//         fetch(requestFiveDay, {

//             method: "GET",
//             credentials: "same-origin",
//             redirect: "follow",
//             cache: "reload",
//         })
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                 console.log(data);


//                 // DAY 1 of 5

//                 var dayOneDate = document.querySelector("#day-one-date");
//                 var dayOneIcon = document.querySelector("#day-one-icon");
//                 var dayOneTemp = document.querySelector("#day-one-temp");
//                 var dayOneHumidity = document.querySelector("#day-one-humidity");


//                 dayOneDate.textContent = (moment().add(1, 'days').format('MM[/]D[/]yyyy'))

//                 dayOneIcon.textContent = data.daily[0].weather[0].icon
//                 dayOneTemp.textContent = `Temp: ${data.daily[0].temp.day}\u00B0F`
//                 dayOneHumidity.textContent = `Humidity: ${data.daily[0].humidity}`


//                 // DAY 2 of 5
//                 var dayTwoDate = document.querySelector("#day-two-date");
//                 var dayTwoIcon = document.querySelector("#day-two-icon");
//                 var dayTwoTemp = document.querySelector("#day-two-temp");
//                 var dayTwoHumidity = document.querySelector("#day-two-humidity");

//                 dayTwoDate.textContent = (moment().add(2, 'days').format('MM[/]D[/]yyyy'))
//                 dayTwoIcon.textContent = data.daily[1].weather[0].icon
//                 dayTwoTemp.textContent = data.daily[1].temp.day
//                 dayTwoHumidity.textContent = data.daily[1].humidity


//                 // DAY 3 of 5
//                 var dayThreeDate = document.querySelector("#day-three-date");
//                 var dayThreeIcon = document.querySelector("#day-three-icon");
//                 var dayThreeTemp = document.querySelector("#day-three-temp");
//                 var dayThreeHumidity = document.querySelector("#day-three-humidity");


//                 dayThreeDate.textContent = (moment().add(3, 'days').format('MM[/]D[/]yyyy'))
//                 dayThreeIcon.textContent = data.daily[2].weather[0].icon
//                 dayThreeTemp.textContent = data.daily[2].temp.day
//                 dayThreeHumidity.textContent = data.daily[2].humidity

//                 // DAY 4 of 5
//                 var dayFourDate = document.querySelector("#day-four-date");
//                 var dayFourIcon = document.querySelector("#day-four-icon");
//                 var dayFourTemp = document.querySelector("#day-four-temp");
//                 var dayFourHumidity = document.querySelector("#day-four-humidity");


//                 dayFourDate.textContent = (moment().add(4, 'days').format('MM[/]D[/]yyyy'))
//                 dayFourIcon.textContent = data.daily[3].weather[0].icon
//                 dayFourTemp.textContent = data.daily[3].temp.day
//                 dayFourHumidity.textContent = data.daily[3].humidity

//                 // DAY 5 of 5
//                 var dayFiveDate = document.querySelector("#day-five-date");
//                 var dayFiveIcon = document.querySelector("#day-five-icon");
//                 var dayFiveTemp = document.querySelector("#day-five-temp");
//                 var dayFiveHumidity = document.querySelector("#day-five-humidity");


//                 dayFiveDate.textContent = (moment().add(5, 'days').format('MM[/]D[/]yyyy'))
//                 dayFiveIcon.textContent = data.daily[4].weather[0].icon
//                 dayFiveTemp.textContent = data.daily[4].temp.day
//                 dayFiveHumidity.textContent = data.daily[4].humidity


//             })



//     } else {
//         // alert("must enter a valid zip code")
//         placeZip = document.querySelector("#place-zip");
//         placeZip.value = "Not a valid Zip Code"
//     }
//     return (zipSearch)
// }




// console.log("Hi!")

// var weatherCity = document.querySelector(".weather-city");
// // var fetchButton = document.querySelector(".get-weather");

// // function getWeather() {
// var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=94965&units=imperial&appid=fd7013d34fa65ca951cba9b9f0dde107';
// // var requestFiveDay = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.8591&lon=122.4853&units=imperial&exclude=mimutely,hourly,alerts&appid=fd7013d34fa65ca951cba9b9f0dde107';

// fetch(requestUrl, {

//     method: "GET",
//     credentials: "same-origin",
//     redirect: "follow",
//     cache: "reload",
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         // for (var i = 0; i <img data.length; i++) {

//         var myImg = document.getElementById("main-image")
//         myImg.src = "./assets/icons/10d.png";
//         var mainCityName = document.querySelector("#main-city-name");
//         var mainCurrentConditions = document.querySelector("#main-current-conditions");
//         var mainTemp = document.querySelector("#main-temp");
//         var mainHumidity = document.querySelector("#main-humidity");
//         var mainWindSpeed = document.querySelector("#main-wind-speed");
//         var mainUvIndex = document.querySelector("#main-uv-index");
//         var mainAirQuality = document.querySelector("#main-air-quality");
//         var mainCurrentDAy = document.querySelector("#main-current-day");
//         mainCityName.textContent = data.name + " " + (moment().format('MM[/]D[/]yyyy'))
//         mainCurrentConditions.textContent = data.weather[0].description
//         // mainCurrentDAy.textContent = (moment().format('MM[/]D[/]yyyy'))
//         var myImg = document.getElementById("main-image")
//         myImg.src = "./assets/icons/10d.png";


//         // });

//         mainTemp.textContent = `Temperature: ${data.main.temp} degrees farenheight`
//         mainHumidity.textContent = `Humidity: ${data.main.humidity}`
//         mainWindSpeed.textContent = `Wind Speed: ${data.wind.speed} MPH`
//         mainUvIndex.textContent = `icon: ${data.weather[0].icon}`
//         mainIcon = document.querySelector("#main-icon")
//         var icon = data.weather[0].icon
//         mainIcon.textContent = `http://openweathermap.org/img/w/${icon}.png`;
//         // alert(mainIcon)
//         var mainIconTest = document.querySelector("#main-icon-test");
//         mainIconTest.style.height = "50px";
//         mainIconTest.style.width = "50px";
//         mainIconTest.style.backgroundImage = "url('http://openweathermap.org/img/w/01n.png')";
//         // mainIconTest.src = url"(http://openweathermap.org/img/w/01n.png)"


//         var myImg = document.getElementById("main-image")
//         myImg.src = "./assets/icons/10d.png";
//         // mainAirQuality.textContent = `sunrise is at: ${data.sys.sunrise * 1000}`
//         console.log(mainCityName)
//         console.log(mainCurrentConditions)
//     })
// //     var userName = document.createElement('h3');
// //     var issueTitle = document.createElement('h4');
// //     var issueBody = document.createElement('p');
// //     userName.textContent = data[i].user.login;
// //     issueTitle.textContent = data[i].title;
// //     issueBody.textContent = data[i].body;
// //     issueContainer.append(userName);
// //     issueContainer.append(issueTitle);
// //     issueContainer.append(issueBody);
// // }

// var requestFiveDay = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.8591&lon=122.4853&units=imperial&exclude=current,minutely,hourly,alerts&appid=fd7013d34fa65ca951cba9b9f0dde107';
// fetch(requestFiveDay, {

//     method: "GET",
//     credentials: "same-origin",
//     redirect: "follow",
//     cache: "reload",
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);


//         // DAY 1 of 5

//         var dayOneDate = document.querySelector("#day-one-date");
//         var dayOneIcon = document.querySelector("#day-one-icon");
//         var dayOneTemp = document.querySelector("#day-one-temp");
//         var dayOneHumidity = document.querySelector("#day-one-humidity");


//         dayOneDate.textContent = (moment().add(1, 'days').format('MM[/]D[/]yyyy'))

//         dayOneIcon.textContent = data.daily[0].weather[0].icon
//         dayOneTemp.textContent = data.daily[0].temp.day
//         dayOneHumidity.textContent = data.daily[0].humidity


//         // DAY 2 of 5
//         var dayTwoDate = document.querySelector("#day-two-date");
//         var dayTwoIcon = document.querySelector("#day-two-icon");
//         var dayTwoTemp = document.querySelector("#day-two-temp");
//         var dayTwoHumidity = document.querySelector("#day-two-humidity");

//         dayTwoDate.textContent = (moment().add(2, 'days').format('MM[/]D[/]yyyy'))
//         dayTwoIcon.textContent = data.daily[1].weather[0].icon
//         dayTwoTemp.textContent = data.daily[1].temp.day
//         dayTwoHumidity.textContent = data.daily[1].humidity


//         // DAY 3 of 5
//         var dayThreeDate = document.querySelector("#day-three-date");
//         var dayThreeIcon = document.querySelector("#day-three-icon");
//         var dayThreeTemp = document.querySelector("#day-three-temp");
//         var dayThreeHumidity = document.querySelector("#day-three-humidity");


//         dayThreeDate.textContent = (moment().add(3, 'days').format('MM[/]D[/]yyyy'))
//         dayThreeIcon.textContent = data.daily[2].weather[0].icon
//         dayThreeTemp.textContent = data.daily[2].temp.day
//         dayThreeHumidity.textContent = data.daily[2].humidity

//         // DAY 4 of 5
//         var dayFourDate = document.querySelector("#day-four-date");
//         var dayFourIcon = document.querySelector("#day-four-icon");
//         var dayFourTemp = document.querySelector("#day-four-temp");
//         var dayFourHumidity = document.querySelector("#day-four-humidity");


//         dayFourDate.textContent = (moment().add(4, 'days').format('MM[/]D[/]yyyy'))
//         dayFourIcon.textContent = data.daily[3].weather[0].icon
//         dayFourTemp.textContent = data.daily[3].temp.day
//         dayFourHumidity.textContent = data.daily[3].humidity

//         // DAY 5 of 5
//         var dayFiveDate = document.querySelector("#day-five-date");
//         var dayFiveIcon = document.querySelector("#day-five-icon");
//         var dayFiveTemp = document.querySelector("#day-five-temp");
//         var dayFiveHumidity = document.querySelector("#day-five-humidity");


//         dayFiveDate.textContent = (moment().add(5, 'days').format('MM[/]D[/]yyyy'))
//         dayFiveIcon.textContent = data.daily[4].weather[0].icon
//         dayFiveTemp.textContent = data.daily[4].temp.day
//         dayFiveHumidity.textContent = data.daily[4].humidity


//     })



// // function AustinTX()
// function austinTX() {


//     var weatherCity = document.querySelector(".weather-city");
//     // var fetchButton = document.querySelector(".get-weather");

//     // function getWeather() {
//     var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=78701&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107';

//     fetch(requestUrl, {

//         method: "GET",
//         credentials: "same-origin",
//         redirect: "follow",
//         cache: "reload",
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             // for (var i = 0; i < data.length; i++) {
//             var mainCityName = document.querySelector("#main-city-name");
//             var mainCurrentConditions = document.querySelector("#main-current-conditions");
//             var mainTemp = document.querySelector("#main-temp");
//             var mainHumidity = document.querySelector("#main-humidity");
//             var mainWindSpeed = document.querySelector("#main-wind-speed");
//             var mainUvIndex = document.querySelector("#main-uv-index");
//             var mainAirQuality = document.querySelector("#main-air-quality");
//             var mainCurrentDAy = document.querySelector("#main-current-day")
//             mainCityName.textContent = data.city.name
//             mainCurrentConditions.textContent = data.list[0].weather[0].description
//             mainCurrentDAy.textContent = data.list[0].dt_txt

//             mainTemp.textContent = `The current temperature is: ${data.list[0].main.temp} degrees farenheight`
//             mainHumidity.textContent = `The current humidity is: ${data.list[0].main.humidity}`
//             mainWindSpeed.textContent = `current wind speed: ${data.list[0].wind.speed} mph`
//             mainUvIndex.textContent = `icon: ${data.list[0].clouds}`
//             mainAirQuality.textContent = `sunrise is at: ${data.city.sunrise}`
//             console.log(mainCityName)
//             console.log(mainCurrentConditions)
//             //     var userName = document.createElement('h3');
//             //     var issueTitle = document.createElement('h4');
//             //     var issueBody = document.createElement('p');
//             //     userName.textContent = data[i].user.login;
//             //     issueTitle.textContent = data[i].title;
//             //     issueBody.textContent = data[i].body;
//             //     issueContainer.append(userName);
//             //     issueContainer.append(issueTitle);
//             //     issueContainer.append(issueBody);
//             // }
//         })
//     // DAY 1 of 5
//     // var dayOneTemp = document.querySelector("#day-one-temp");
//     // var dayTwoTemp = document.querySelector("#day-two-temp");
//     // var dayThreeTemp = document.querySelector("#day-three-temp");
//     // var dayFourTemp = document.querySelector("#day-four-temp");
//     // var dayFiveTemp = document.querySelector("#day-five-temp");
//     var requestFiveDay = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.8591&lon=122.4853&units=imperial&exclude=current,minutely,hourly,alerts&appid=fd7013d34fa65ca951cba9b9f0dde107';
//     fetch(requestFiveDay, {

//         method: "GET",
//         credentials: "same-origin",
//         redirect: "follow",
//         cache: "reload",
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);


//             // DAY 1 of 5

//             var dayOneDate = document.querySelector("#day-one-date");
//             var dayOneIcon = document.querySelector("#day-one-icon");
//             var dayOneTemp = document.querySelector("#day-one-temp");
//             var dayOneHumidity = document.querySelector("#day-one-humidity");


//             dayOneDate.textContent = (moment().add(1, 'days').format('MM[/]D[/]yyyy'))

//             dayOneIcon.textContent = data.daily[0].weather[0].icon
//             dayOneTemp.textContent = data.daily[0].temp.day
//             dayOneHumidity.textContent = data.daily[0].humidity


//             // DAY 2 of 5
//             var dayTwoDate = document.querySelector("#day-two-date");
//             var dayTwoIcon = document.querySelector("#day-two-icon");
//             var dayTwoTemp = document.querySelector("#day-two-temp");
//             var dayTwoHumidity = document.querySelector("#day-two-humidity");

//             dayTwoDate.textContent = (moment().add(2, 'days').format('MM[/]D[/]yyyy'))
//             dayTwoIcon.textContent = data.daily[1].weather[0].icon
//             dayTwoTemp.textContent = data.daily[1].temp.day
//             dayTwoHumidity.textContent = data.daily[1].humidity


//             // DAY 3 of 5
//             var dayThreeDate = document.querySelector("#day-three-date");
//             var dayThreeIcon = document.querySelector("#day-three-icon");
//             var dayThreeTemp = document.querySelector("#day-three-temp");
//             var dayThreeHumidity = document.querySelector("#day-three-humidity");


//             dayThreeDate.textContent = (moment().add(3, 'days').format('MM[/]D[/]yyyy'))
//             dayThreeIcon.textContent = data.daily[2].weather[0].icon
//             dayThreeTemp.textContent = data.daily[2].temp.day
//             dayThreeHumidity.textContent = data.daily[2].humidity

//             // DAY 4 of 5
//             var dayFourDate = document.querySelector("#day-four-date");
//             var dayFourIcon = document.querySelector("#day-four-icon");
//             var dayFourTemp = document.querySelector("#day-four-temp");
//             var dayFourHumidity = document.querySelector("#day-four-humidity");


//             dayFourDate.textContent = (moment().add(4, 'days').format('MM[/]D[/]yyyy'))
//             dayFourIcon.textContent = data.daily[3].weather[0].icon
//             dayFourTemp.textContent = data.daily[3].temp.day
//             dayFourHumidity.textContent = data.daily[3].humidity

//             // DAY 5 of 5
//             var dayFiveDate = document.querySelector("#day-five-date");
//             var dayFiveIcon = document.querySelector("#day-five-icon");
//             var dayFiveTemp = document.querySelector("#day-five-temp");
//             var dayFiveHumidity = document.querySelector("#day-five-humidity");


//             dayFiveDate.textContent = (moment().add(5, 'days').format('MM[/]D[/]yyyy'))
//             dayFiveIcon.textContent = data.daily[4].weather[0].icon
//             dayFiveTemp.textContent = data.daily[4].temp.day
//             dayFiveHumidity.textContent = data.daily[4].humidity


//         })

//     // })

//     return (austinTX)
// }

// function chicagoIL() {
//     // let austinTXAlert = alert("Austin TX Pressed");

//     var weatherCity = document.querySelector(".weather-city");
//     // var fetchButton = document.querySelector(".get-weather");

//     // function getWeather() {
//     var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=60622&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107';

//     fetch(requestUrl, {

//         method: "GET",
//         credentials: "same-origin",
//         redirect: "follow",
//         cache: "reload",
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             // for (var i = 0; i < data.length; i++) {
//             var mainCityName = document.querySelector("#main-city-name");
//             var mainCurrentConditions = document.querySelector("#main-current-conditions");
//             var mainTemp = document.querySelector("#main-temp");
//             var mainHumidity = document.querySelector("#main-humidity");
//             var mainWindSpeed = document.querySelector("#main-wind-speed");
//             var mainUvIndex = document.querySelector("#main-uv-index");
//             var mainAirQuality = document.querySelector("#main-air-quality");
//             var mainCurrentDAy = document.querySelector("#main-current-day")
//             mainCityName.textContent = data.city.name
//             mainCurrentConditions.textContent = data.list[0].weather[0].description
//             mainCurrentDAy.textContent = data.list[0].dt_txt

//             mainTemp.textContent = `The current temperature is: ${data.list[0].main.temp} degrees farenheight`
//             mainHumidity.textContent = `The current humidity is: ${data.list[0].main.humidity}`
//             mainWindSpeed.textContent = `current wind speed: ${data.list[0].wind.speed} mph`
//             mainUvIndex.textContent = `icon: ${data.list[0].clouds}`
//             mainAirQuality.textContent = `sunrise is at: ${data.city.sunrise}`
//             console.log(mainCityName)
//             console.log(mainCurrentConditions)

//         })

//     return (chicagoIL)
// }

// function newYorkNY() {
//     // let austinTXAlert = alert("Austin TX Pressed");

//     var weatherCity = document.querySelector(".weather-city");
//     // var fetchButton = document.querySelector(".get-weather");

//     // function getWeather() {
//     var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=10016&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107';

//     fetch(requestUrl, {

//         method: "GET",
//         credentials: "same-origin",
//         redirect: "follow",
//         cache: "reload",
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             // for (var i = 0; i < data.length; i++) {
//             var mainCityName = document.querySelector("#main-city-name");
//             var mainCurrentConditions = document.querySelector("#main-current-conditions");
//             var mainTemp = document.querySelector("#main-temp");
//             var mainHumidity = document.querySelector("#main-humidity");
//             var mainWindSpeed = document.querySelector("#main-wind-speed");
//             var mainUvIndex = document.querySelector("#main-uv-index");
//             var mainAirQuality = document.querySelector("#main-air-quality");
//             var mainCurrentDAy = document.querySelector("#main-current-day")
//             mainCityName.textContent = data.city.name
//             mainCurrentConditions.textContent = data.list[0].weather[0].description
//             mainCurrentDAy.textContent = data.list[0].dt_txt

//             mainTemp.textContent = `The current temperature is: ${data.list[0].main.temp} degrees farenheight`
//             mainHumidity.textContent = `The current humidity is: ${data.list[0].main.humidity}`
//             mainWindSpeed.textContent = `current wind speed: ${data.list[0].wind.speed} mph`
//             mainUvIndex.textContent = `icon: ${data.list[0].clouds}`
//             mainAirQuality.textContent = `sunrise is at: ${data.city.sunrise}`
//             console.log(mainCityName)
//             console.log(mainCurrentConditions)

//         })

//     return (newYorkNY)
// }

// function orlandoFL() {
//     // let austinTXAlert = alert("Austin TX Pressed");

//     var weatherCity = document.querySelector(".weather-city");
//     // var fetchButton = document.querySelector(".get-weather");

//     // function getWeather() {
//     var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=32801&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107';

//     fetch(requestUrl, {

//         method: "GET",
//         credentials: "same-origin",
//         redirect: "follow",
//         cache: "reload",
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             // for (var i = 0; i < data.length; i++) {
//             var mainCityName = document.querySelector("#main-city-name");
//             var mainCurrentConditions = document.querySelector("#main-current-conditions");
//             var mainTemp = document.querySelector("#main-temp");
//             var mainHumidity = document.querySelector("#main-humidity");
//             var mainWindSpeed = document.querySelector("#main-wind-speed");
//             var mainUvIndex = document.querySelector("#main-uv-index");
//             var mainAirQuality = document.querySelector("#main-air-quality");
//             var mainCurrentDAy = document.querySelector("#main-current-day")
//             mainCityName.textContent = data.city.name
//             mainCurrentConditions.textContent = data.list[0].weather[0].description
//             mainCurrentDAy.textContent = data.list[0].dt_txt

//             mainTemp.textContent = `The current temperature is: ${data.list[0].main.temp} degrees farenheight`
//             mainHumidity.textContent = `The current humidity is: ${data.list[0].main.humidity}`
//             mainWindSpeed.textContent = `current wind speed: ${data.list[0].wind.speed} mph`
//             mainUvIndex.textContent = `icon: ${data.list[0].clouds}`
//             mainAirQuality.textContent = `sunrise is at: ${data.city.sunrise}`
//             console.log(mainCityName)
//             console.log(mainCurrentConditions)

//         })

//     return (orlandoFL)
// }

// function sanFranciscoCA() {


//     var weatherCity = document.querySelector(".weather-city");
//     // var fetchButton = document.querySelector(".get-weather");

//     // function getWeather() {
//     var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=94115&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107';

//     fetch(requestUrl, {

//         method: "GET",
//         credentials: "same-origin",
//         redirect: "follow",
//         cache: "reload",
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             // for (var i = 0; i < data.length; i++) {
//             var mainCityName = document.querySelector("#main-city-name");
//             var mainCurrentConditions = document.querySelector("#main-current-conditions");
//             var mainTemp = document.querySelector("#main-temp");
//             var mainHumidity = document.querySelector("#main-humidity");
//             var mainWindSpeed = document.querySelector("#main-wind-speed");
//             var mainUvIndex = document.querySelector("#main-uv-index");
//             var mainAirQuality = document.querySelector("#main-air-quality");
//             var mainCurrentDAy = document.querySelector("#main-current-day")
//             mainCityName.textContent = data.city.name
//             mainCurrentConditions.textContent = data.list[0].weather[0].description
//             mainCurrentDAy.textContent = data.list[0].dt_txt

//             mainTemp.textContent = `The current temperature is: ${data.list[0].main.temp} degrees farenheight`
//             mainHumidity.textContent = `The current humidity is: ${data.list[0].main.humidity}`
//             mainWindSpeed.textContent = `current wind speed: ${data.list[0].wind.speed} mph`
//             mainUvIndex.textContent = `icon: ${data.list[0].clouds}`
//             mainAirQuality.textContent = `sunrise is at: ${data.city.sunrise}`
//             console.log(mainCityName)
//             console.log(mainCurrentConditions)

//         })

//     return (sanFranciscoCA)
// }

// function seattleWA() {


//     var weatherCity = document.querySelector(".weather-city");
//     // var fetchButton = document.querySelector(".get-weather");

//     // function getWeather() {
//     var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=98101&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107';

//     fetch(requestUrl, {

//         method: "GET",
//         credentials: "same-origin",
//         redirect: "follow",
//         cache: "reload",
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             // for (var i = 0; i < data.length; i++) {
//             var mainCityName = document.querySelector("#main-city-name");
//             var mainCurrentConditions = document.querySelector("#main-current-conditions");
//             var mainTemp = document.querySelector("#main-temp");
//             var mainHumidity = document.querySelector("#main-humidity");
//             var mainWindSpeed = document.querySelector("#main-wind-speed");
//             var mainUvIndex = document.querySelector("#main-uv-index");
//             var mainAirQuality = document.querySelector("#main-air-quality");
//             var mainCurrentDAy = document.querySelector("#main-current-day")
//             mainCityName.textContent = data.city.name
//             mainCurrentConditions.textContent = data.list[0].weather[0].description
//             mainCurrentDAy.textContent = data.list[0].dt_txt

//             mainTemp.textContent = `The current temperature is: ${data.list[0].main.temp} degrees farenheight`
//             mainHumidity.textContent = `The current humidity is: ${data.list[0].main.humidity}`
//             mainWindSpeed.textContent = `current wind speed: ${data.list[0].wind.speed} mph`
//             mainUvIndex.textContent = `icon: ${data.list[0].clouds}`
//             mainAirQuality.textContent = `sunrise is at: ${data.city.sunrise}`
//             console.log(mainCityName)
//             console.log(mainCurrentConditions)

//         })

//     return (seattleWA)
// }

// function denverCO() {


//     var weatherCity = document.querySelector(".weather-city");
//     // var fetchButton = document.querySelector(".get-weather");

//     // function getWeather() {
//     var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=80202&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107';

//     fetch(requestUrl, {

//         method: "GET",
//         credentials: "same-origin",
//         redirect: "follow",
//         cache: "reload",
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             // for (var i = 0; i < data.length; i++) {
//             var mainCityName = document.querySelector("#main-city-name");
//             var mainCurrentConditions = document.querySelector("#main-current-conditions");
//             var mainTemp = document.querySelector("#main-temp");
//             var mainHumidity = document.querySelector("#main-humidity");
//             var mainWindSpeed = document.querySelector("#main-wind-speed");
//             var mainUvIndex = document.querySelector("#main-uv-index");
//             var mainAirQuality = document.querySelector("#main-air-quality");
//             var mainCurrentDAy = document.querySelector("#main-current-day")
//             mainCityName.textContent = data.city.name
//             mainCurrentConditions.textContent = data.list[0].weather[0].description
//             mainCurrentDAy.textContent = data.list[0].dt_txt

//             mainTemp.textContent = `The current temperature is: ${data.list[0].main.temp} degrees farenheight`
//             mainHumidity.textContent = `The current humidity is: ${data.list[0].main.humidity}`
//             mainWindSpeed.textContent = `current wind speed: ${data.list[0].wind.speed} mph`
//             mainUvIndex.textContent = `icon: ${data.list[0].clouds}`
//             mainAirQuality.textContent = `sunrise is at: ${data.city.sunrise}`
//             console.log(mainCityName)
//             console.log(mainCurrentConditions)

//         })

//     return (denverCO)
// }

// function atlantaGA() {


//     var weatherCity = document.querySelector(".weather-city");
//     // var fetchButton = document.querySelector(".get-weather");

//     // function getWeather() {
//     var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=30308&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107';

//     fetch(requestUrl, {

//         method: "GET",
//         credentials: "same-origin",
//         redirect: "follow",
//         cache: "reload",
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             // for (var i = 0; i < data.length; i++) {
//             var mainCityName = document.querySelector("#main-city-name");
//             var mainCurrentConditions = document.querySelector("#main-current-conditions");
//             var mainTemp = document.querySelector("#main-temp");
//             var mainHumidity = document.querySelector("#main-humidity");
//             var mainWindSpeed = document.querySelector("#main-wind-speed");
//             var mainUvIndex = document.querySelector("#main-uv-index");
//             var mainAirQuality = document.querySelector("#main-air-quality");
//             var mainCurrentDAy = document.querySelector("#main-current-day")
//             mainCityName.textContent = data.city.name
//             mainCurrentConditions.textContent = data.list[0].weather[0].description
//             mainCurrentDAy.textContent = data.list[0].dt_txt

//             mainTemp.textContent = `The current temperature is: ${data.list[0].main.temp} degrees farenheight`
//             mainHumidity.textContent = `The current humidity is: ${data.list[0].main.humidity}`
//             mainWindSpeed.textContent = `current wind speed: ${data.list[0].wind.speed} mph`
//             mainUvIndex.textContent = `icon: ${data.list[0].clouds}`
//             mainAirQuality.textContent = `sunrise is at: ${data.city.sunrise}`
//             console.log(mainCityName)
//             console.log(mainCurrentConditions)

//         })

//     return (atlantaGA)
// }

// function zipSearch() {



//     // function getWeather() {
//     var zip = document.querySelector(".zip").value
//     if (zip.length === 5 && zip !== Nan) {

//         var requestUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&cnt=6&appid=fd7013d34fa65ca951cba9b9f0dde107`;

//         fetch(requestUrl, {

//             method: "GET",
//             credentials: "same-origin",
//             redirect: "follow",
//             cache: "reload",
//         })
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                 console.log(data);
//                 // for (var i = 0; i < data.length; i++) {
//                 var mainCityName = document.querySelector("#main-city-name");
//                 var mainCurrentConditions = document.querySelector("#main-current-conditions");
//                 var mainTemp = document.querySelector("#main-temp");
//                 var mainHumidity = document.querySelector("#main-humidity");
//                 var mainWindSpeed = document.querySelector("#main-wind-speed");
//                 var mainUvIndex = document.querySelector("#main-uv-index");
//                 var mainAirQuality = document.querySelector("#main-air-quality");
//                 var mainCurrentDAy = document.querySelector("#main-current-day")
//                 mainCityName.textContent = data.city.name
//                 mainCurrentConditions.textContent = data.list[0].weather[0].description
//                 mainCurrentDAy.textContent = data.list[0].dt_txt

//                 mainTemp.textContent = `The current temperature is: ${data.list[0].main.temp} degrees farenheight`
//                 mainHumidity.textContent = `The current humidity is: ${data.list[0].main.humidity}`
//                 mainWindSpeed.textContent = `current wind speed: ${data.list[0].wind.speed} mph`
//                 mainUvIndex.textContent = `icon: ${data.list[0].clouds}`
//                 mainAirQuality.textContent = `sunrise is at: ${data.city.sunrise}`
//                 console.log(mainCityName)
//                 console.log(mainCurrentConditions)

//             })
//     } else {
//         // alert("must enter a valid zip code")
//         placeZip = document.querySelector("#place-zip");
//         placeZip.value = "Not a valid Zip Code"
//     }
//     return (zipSearch)
// }