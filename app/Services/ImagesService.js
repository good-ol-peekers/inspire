import { appState } from "../AppState.js"
import { Image, Weather } from "../Models/Image.js"
import { sandboxAPI } from "./AxiosService.js"

class ImageService {

async getImages() {
    const res = await sandboxAPI.get('/images')
    appState.images = new Image(res.data)
    // console.log('getImages in service', res.data)
}

async getWeather() {
    const res = await sandboxAPI.get('/weather')
    appState.weather = new Weather(res.data)
    console.log('this is how weather comes in from API' ,res.data)
}

}


export const imageService = new ImageService()