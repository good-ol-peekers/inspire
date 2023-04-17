export class Weather {

    constructor(data) {
        this.temp = Number(data.main.temp) 
        // this.weather = data.weather.icon
        this.wind = data.wind.speed
    }



    get WeatherCard() {
        return `
        <div class="p-1 mt-2">
        <h5 class="my-2"> Current Temps ${this.temp}
        <button type="button" onclick="app.imagesController.changeTemp()" class="buttonStyle1"> <i class="mdi mdi-thermometer"></i> <i class="mdi mdi-temperature-celsius"></i> <i class="mdi mdi-temperature-fahrenheit"></i> </button></h4>
        </div>               
        <h5> Wind Speed ${this.wind}</h5>
            `
    }
}