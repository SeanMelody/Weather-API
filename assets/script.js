console.log("Hi!")

var weatherMain = document.querySelector(".weather-main");
var fetchButton = document.querySelector(".get-weather");

function getWeather() {
    var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=94112&appid=fd7013d34fa65ca951cba9b9f0dde107';

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
        })
}


fetchButton.addEventListener('click', getWeather);