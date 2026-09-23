const weatherAPI = "https://api.openweathermap.org/data/2.5/weather";

const weatherCard = document.getElementById("weatherCard");
const searchCard = document.getElementById("searchCard");
const forecastButton = document.getElementById("forecastButton");
const backButton = document.getElementById("backButton");
const weatherForm = document.getElementById("weatherForm");
const currentTime = document.getElementById("currentTime");
const currentDate = document.getElementById("currentDate");
const locationCity = document.getElementById("locationCity");
const locationCountry = document.getElementById("locationCountry");
const temperatureValue = document.getElementById("temperatureValue");
const weatherIcon = document.getElementById("weatherIcon");
const weatherCondition = document.getElementById("weatherCondition");
const humidityValue = document.getElementById("humidityValue");
const windSpeed = document.getElementById("windSpeed");
const cloudPercentage = document.getElementById("cloudPercentage");
const sunriseTime = document.getElementById("sunriseTime");
const sunsetTime = document.getElementById("sunsetTime");

function checkWeatherForm() {
    if (weatherForm.checkValidity()) {
        forecastButton.disabled = false;
    } else {
        forecastButton.disabled = true;
    }
}

weatherForm.addEventListener("input", () => {
    checkWeatherForm();
});

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

forecastButton.addEventListener("click", () => {
    const cityInput = document.getElementById("cityInput");
    const city = cityInput.value;

    searchCard.style = "display:none";
    weatherCard.style = "display:block";

    fetch(`${weatherAPI}?q=${city.toLowerCase()}&appid=f34999b33de536b61636f3c82e8a69ba`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const currentWeatherTime =
                new Date((data.dt + data.timezone) * 1000);

            currentTime.innerText =
                `${String(currentWeatherTime.getUTCHours()).padStart(2, "0")}:${String(currentWeatherTime.getUTCMinutes()).padStart(2, "0")}`;

            currentDate.innerText =
                `${currentWeatherTime.getUTCDate()} ${new Intl.DateTimeFormat("en", {
                    month: "short",
                    timeZone: "UTC"
                }).format(currentWeatherTime).toLocaleUpperCase()}`;

            locationCity.innerText = data.name.toUpperCase();
            locationCountry.innerText = data.sys.country.toUpperCase();

            temperatureValue.innerText =
                (data.main.temp - 273.15).toFixed(0);

            const weatherIconCode = data.weather[0].icon;
            const weatherDescription = data.weather[0].main;

            weatherCondition.innerText = weatherDescription;

            const weatherIconClass =
                getWeatherIcon(weatherIconCode);

            weatherIcon.innerHTML = `
                <i class="fa-solid ${weatherIconClass}"></i>
            `;

            humidityValue.innerText =
                `${data.main.humidity}%`;

            windSpeed.innerText =
                `${data.wind.speed} m/s`;

            cloudPercentage.innerText =
                `${data.clouds.all}%`;

            const sunriseDate =
                new Date((data.sys.sunrise + data.timezone) * 1000);

            const sunsetDate =
                new Date((data.sys.sunset + data.timezone) * 1000);

            sunriseTime.innerText =
                `${String(sunriseDate.getUTCHours()).padStart(2, "0")}:${String(sunriseDate.getUTCMinutes()).padStart(2, "0")}`;

            sunsetTime.innerText =
                `${String(sunsetDate.getUTCHours()).padStart(2, "0")}:${String(sunsetDate.getUTCMinutes()).padStart(2, "0")}`;
        })
        .catch((error) => {
            console.log("Error: ", error);
        })
        .finally(() => {
            console.log("Finally Executed...");
        });
});

function getWeatherIcon(iconCode) {
    const weatherIcons = {
        "01d": "fa-sun",
        "01n": "fa-moon",
        "02d": "fa-cloud-sun",
        "02n": "fa-cloud-moon",
        "03d": "fa-cloud",
        "03n": "fa-cloud",
        "04d": "fa-cloud",
        "04n": "fa-cloud",
        "09d": "fa-cloud-showers-heavy",
        "09n": "fa-cloud-showers-heavy",
        "10d": "fa-cloud-sun-rain",
        "10n": "fa-cloud-moon-rain",
        "11d": "fa-cloud-bolt",
        "11n": "fa-cloud-bolt",
        "13d": "fa-snowflake",
        "13n": "fa-snowflake",
        "50d": "fa-smog",
        "50n": "fa-smog"
    };

    return weatherIcons[iconCode] || "fa-cloud";
}

function addinfo() {
    searchCard.style = "display:block";
    weatherCard.style = "display:none";
}