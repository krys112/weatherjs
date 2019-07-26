class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        const temp = parseFloat(`${weather.main.temp}`);
        const humidity = parseFloat(`${weather.main.humidity}`);
        const celsius = ((temp - 32) * 5/9).toFixed(1);
        const dewpoint = (celsius-((100 - humidity)/5)).toFixed(1);
        
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp} F (${celsius} C)`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.dewpoint.textContent = `Dew Point: ${dewpoint} C`;
        this.wind.textContent = `Wind: ${weather.wind.deg} at ${weather.wind.speed} mph`;
    }
}