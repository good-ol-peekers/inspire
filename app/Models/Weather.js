export class Weather {

    constructor(data) {
        this.temp = data.main.temp
        // this.weather = data.weather.icon
        this.wind = data.wind.speed

    }



    get WeatherCard() {
        return `
            <h1> Current Temps ${this.temp}</h1>
            <h1> Wind Speed ${this.wind}</h1>
            <div>
            <button type="button" onclick="app.imagesController.changeTemp()" class="btn btn-outline-success"> <i class="mdi mdi-thermometer"></i> <i class="mdi mdi-temperature-celsius"></i> <i class="mdi mdi-temperature-fahrenheit"></> </button>
            </div>               
            `
    }
}