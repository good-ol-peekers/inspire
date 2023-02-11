import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
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
  let template = appState.weather == `
        <img src="${this.weather}" alt="weather icon?">
            <h1>${this.temp}</h1>
            <h1>${this.wind}</h1>
            `
setHTML('weather', template)
console.log(template)
}

export class ImagesController {

constructor() {
    this.getImages()
    this.getWeather()
    appState.on('images', _drawImages)
    appState.on('weather', _drawWeather)
    _getTime()
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



