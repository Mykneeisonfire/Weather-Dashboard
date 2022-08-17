const apiKey = "aac1af378163b93e13d358a32d684c95";

//Search//

function findCity(){
    let city = document.querySelector("input").value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(res => res.json()).then(data => {

        localStorage.setItem('currentCity',city);
        fetchWeather(data);
    })
}
// Weather api call//

function fetchWeather(data) {
    let latitude = data.coord.lat
    let longitude = data.coord.lon
    let city = document.querySelector("input").value;
    
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${apiKey}`).then(res => res.json()).then(data => {
    console.log(data);
    weatherDisplay(city,data);
    forecastDisplay(data);
    })
}

//Main Weather Display//

function weatherDisplay(city,data){
    const {temp,humidity, wind_speed, uvi} = data.current;
    const {icon, description} =data.current.weather[0]

    document.querySelector(".current-city").innerText = city;
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".wind").innerText = "Wind speed: " +wind_speed + "mph";
    document.querySelector(".humidity").innerText = "humidity:" + humidity + "%";
    document.querySelector(".uvindex").innerText = "Index" + uvi;


}

//Five Day Forecast Display