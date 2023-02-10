import { appState } from "../AppState.js"
import { imageService } from "../Services/ImagesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawImages() {
    document.body.style.backgroundImage = `url(${appState.images.url})`
    document.body.style.backgroundSize = imgElement.naturalWidth
}

function _getTime() {
  let time = new Date().toTimeString();
    // console.log (time)
    setText('dateTime', time)
}
setInterval(_getTime, 1000)

function _drawWeather() {
let template = ''
appState.weather.forEach(w => template += w.WeatherCard)
setHTML('weather', template)
}

export class ImagesController {

constructor() {
    this.getImages()
    appState.on('images', _drawImages)
    _getTime()
    this.getWeather()
    appState.on('weather', _drawWeather)
    _drawWeather()
}

async getImages() {
    try {
        await imageService.getImages() 
    } catch (error) {
        console.log(error)
        Pop.error(error)
    }
}

async getWeather() {
    try {
        await imageService.getWeather()
    } catch (error) {
        console.log(error)
        Pop.error(error)
    }
}




}



