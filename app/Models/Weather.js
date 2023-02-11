export class Weather {

    constructor(data) {
        this.temp = data.main.temp
        this.weather = data.weather.main
        this.wind = data.wind.speed
    }



    get WeatherCard() {
        return `
        <img src="${this.weather}" alt="weather icon?">
            <h1>${this.temp}</h1>
            <h1>${this.wind}</h1>
            `
    }
}