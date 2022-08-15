var ApiKey="aac1af378163b93e13d358a32d684c95"

function displayWeather(event){
    event.preventDefault();
    if(citySearch.val().trim()!==""){
            city=citySearch.val().trim();
            currentWeather(city);
    }
}