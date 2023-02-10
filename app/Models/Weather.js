export class Weather {

    constructor(data) {
        this.temp = data.main.temp
        this.weather = data.weather.main
        this.wind = data.wind.speed
    }

    get WeatherCard() {
        return `
        <h1>${this.temp}</h1>
        <h1>${this.weather}</h1>
        <h1>${this.wind}</h1>
        `
    }
}