import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxAPI } from "./AxiosService.js"

class WeatherService  {

    async getWeather() {
        const res = await sandboxAPI.get('/weather')
        const newTemps= res.data.map(weatherService => new Weather(WeatherService))
        appState.weather.push(newTemps) 
        
        // console.log('this is how weather comes in from API' ,res.data)
    }


// async addWeather() {
//     const newWeather = {
//         temp: appState.weather.main.temp,
//         weather: appState.weather.data.weather.main,
//         wind: appState.weather.data.wind.speed,
//     }
}




export const weatherService = new WeatherService()