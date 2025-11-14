
const API_KEY = 'fd54f0a1ff2425995421617e162ce5bd'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'; 
const UNITS = 'metric'; 
const cityInputEl = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const statusMessageEl = document.getElementById('status-message');
const weatherResultEl = document.getElementById('weather-result');
const toggleLoading = (isLoading) => {
    if (isLoading) {
        statusMessageEl.className = 'status-message loading-message';
        statusMessageEl.textContent = 'Fetching weather data...';
        weatherResultEl.innerHTML = ''; 
    } else {
        statusMessageEl.textContent = '';
        statusMessageEl.className = 'status-message';
    }
};

const displayError = (message) => {
    statusMessageEl.className = 'status-message error-message';
    statusMessageEl.textContent = `Error: ${message}`;
    weatherResultEl.innerHTML = '';
};


const buildWeatherCard = (data) => {
   
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const minTemp = Math.round(data.main.temp_min);
    const maxTemp = Math.round(data.main.temp_max);
    

    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;


    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherResultEl.innerHTML = `
        <div class="weather-card">
            <h2 class="city-name">${data.name}, ${data.sys.country}</h2>
            
            <img src="${iconUrl}" alt="${description}" class="weather-icon">
            <p class="temp-main">${temp}°C</p>
            <p class="weather-desc">${description}</p>
            
            <div class="details-grid">
                
                <div class="detail-item">
                    <p class="detail-label">Feels Like</p>
                    <p class="detail-value">${feelsLike}°C</p>
                </div>

                <div class="detail-item">
                    <p class="detail-label">Humidity</p>
                    <p class="detail-value">${data.main.humidity}%</p>
                </div>
                
                <div class="detail-item">
                    <p class="detail-label">Wind Speed</p>
                    <p class="detail-value">${data.wind.speed} m/s</p>
                </div>

                <div class="detail-item">
                    <p class="detail-label">Min/Max Temp</p>
                    <p class="detail-value">${minTemp}°C / ${maxTemp}°C</p>
                </div>
            </div>
        </div>
    `;
};


async function fetchWeatherData(city) {
    if (!city) {
        displayError("Please enter a city name.");
        return;
    }
    

    if (API_KEY === 'YOUR_API_KEY_HERE') {
        displayError("API Key is missing. Please replace 'YOUR_API_KEY_HERE' in script.js.");
        return;
    }


    const url = `${BASE_URL}?q=${city}&units=${UNITS}&appid=${API_KEY}`;

    toggleLoading(true); 

    try {
        const response = await fetch(url);
        

        if (!response.ok) {
            const errorData = await response.json();
          
            throw new Error(errorData.message || `HTTP Error: ${response.status}`);
        }
        
        const data = await response.json();
 
        buildWeatherCard(data);

    } catch (err) {

        displayError(err.message || "A network error occurred. Check your API key and network connection.");
        
    } finally {

        toggleLoading(false); 
    }
}


searchBtn.addEventListener('click', () => {
    fetchWeatherData(cityInputEl.value.trim());
});


cityInputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        fetchWeatherData(cityInputEl.value.trim());
    }
});


document.addEventListener('DOMContentLoaded', () => {
    cityInputEl.focus();
});