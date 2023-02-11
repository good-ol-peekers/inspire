import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxAPI } from "./AxiosService.js"

class WeatherService  {

    async getWeather() {
        const res = await sandboxAPI.get('/weather')
        appState.weather = new Weather(res.data) 
        // console.log('this is how weather comes in from API' ,res.data)
    }




}


export const WeatherService = new WeatherService()