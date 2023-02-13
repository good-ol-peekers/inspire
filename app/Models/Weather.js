export class Weather {

    constructor(data) {
        this.temp = data.main.temp
        // this.weather = data.weather.icon
        this.wind = data.wind.speed

    }



    get WeatherCard() {
        return `
            <h1>${this.temp}</h1>
            <h1>${this.wind}</h1>
            <div>
            <button type="button" onclick="app.imagesController.changeTemp()" class="btn btn-outline-success" >change temperature units</button>
            </div>               
            `
    }
}