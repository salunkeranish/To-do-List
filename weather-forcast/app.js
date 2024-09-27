// Constants for the API key and base URL
const API_KEY = '4c1a759c633ffbc359447740daff6a81';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to get weather data based on city name
const getWeatherData = async (city) => {
    try {
        // Construct the API URL with the city name and API key
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`Failed to fetch weather data: ${response.statusText}`);
        }
        
        // Parse the JSON response
        const data = await response.json();
        console.log(data);  // Log the data to the console for debugging
        
        // Display the weather data on the page
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('weatherResult').innerText = `Error: ${error.message}`;
    }
};

// Function to get weather data based on current location
const getWeatherDataByLocation = async (latitude, longitude) => {
    try {
        // Construct the API URL with the latitude, longitude, and API key
        const response = await fetch(`${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`Failed to fetch weather data: ${response.statusText}`);
        }

        // Parse the JSON response
        const data = await response.json();
        console.log(data);  // Log the data to the console for debugging

        // Display the weather data on the page
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('weatherResult').innerText = `Error: ${error.message}`;
    }
};

// Function to display weather data on the page
const displayWeatherData = (data) => {
    const { name, weather, main, wind } = data;
    
    // Display the weather information
    const weatherHTML = `
        <h2 class="text-2xl font-bold">${name}</h2>
        <p class="text-lg">Weather: ${weather[0].description}</p>
        <p class="text-lg">Temperature: ${main.temp}°C</p>
        <p class="text-lg">Humidity: ${main.humidity}%</p>
        <p class="text-lg">Wind Speed: ${wind.speed} m/s</p>
    `;
    
    document.getElementById('weatherResult').innerHTML = weatherHTML;
};

// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    
    if (city) {
        document.getElementById('weatherResult').innerText = 'Loading...';
        getWeatherData(city);
    } else {
        document.getElementById('weatherResult').innerText = 'Please enter a city name';
    }
});

// Add event listener to the current location button
document.getElementById('currentLocationButton').addEventListener('click', () => {
    if (navigator.geolocation) {
        document.getElementById('weatherResult').innerText = 'Getting current location...';
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            getWeatherDataByLocation(latitude, longitude);
        }, (error) => {
            document.getElementById('weatherResult').innerText = `Error: ${error.message}`;
        });
    } else {
        document.getElementById('weatherResult').innerText = 'Geolocation is not supported by this browser.';
    }
});
