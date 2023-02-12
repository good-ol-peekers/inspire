import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxAPI } from "./AxiosService.js"


  function kToF(k) {
    return (k - 273.15) * (9/5) + 32 
    }


class WeatherService  {



    async getWeather() {
        const res = await sandboxAPI.get('/weather')
        let weatherObject = new Weather(res.data)
        weatherObject.temp = kToF(weatherObject.temp)
         appState.weather = weatherObject
        
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