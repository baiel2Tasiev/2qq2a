function searchWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();
    
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=3e5e293cbfce4b2d8a4123445241405&q=${cityInput}`

    fetch(apiUrl)
        .then(response => { return response.json(); })
        .then(updateWeather)
        .catch(error => {
            console.error('Error:', error.message);
            document.getElementById("tempo").innerText = "City not found";
            document.getElementById("wind_mph").innerText = "";
            document.getElementById("wind_kph").innerText = "";
            document.getElementById("localtime").innerText = "";
            document.querySelector(".tempo h1").style.display = "none";
            document.querySelector(".speed h1").style.display = "none";
            document.querySelector(".time h1").style.display = "none";
        });
    }

function updateWeather(data) {
    document.getElementById("tempo").innerText = data.current.temp_c + "°C";
    document.getElementById("wind_mph").innerText = "Wind Speed (mph): " + data.current.wind_mph;
    document.getElementById("localtime").innerText = data.location.localtime;
    // document.getElementById("Bishkek").innerText = data.name.Bishkek
}