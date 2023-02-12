import { appState } from "../AppState.js"
import { imageService } from "../Services/ImagesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"
import { weatherService } from "../Services/WeatherService.js"

function fToC(f) {
return (f - 32) * (5/9)
}

function ctoF(c) {
  return  (c * (9/5)) + 32
}



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
    appState.weather
    setHTML('weather', appState.weather.WeatherCard)
    console.log(template)
}

function _drawQuotes() {
    
}




export class ImagesController {
    
    constructor() {
        this.getImages()
        this.getWeather()
        appState.on('images', _drawImages)
        appState.on('weather', _drawWeather)
        appState.on('quotes', _drawQuotes)
        _getTime()
        _drawWeather()
        this.getQuotes()
    }
    static changeTemp() {
        if(appState.tempUnits == 'f') {
        appState.weather.temp = fToC(appState.weather.temp)
        appState.tempUnits = 'c'
        } else { 
            appState.weather.temp = ctoF(appState.weather.temp)
            appState.tempUnits = 'f'
        }
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
        await weatherService.getWeather()
    } catch (error) {
        console.log(error)
        Pop.error(error)
    }
}

async getQuotes() {
    try {
        await imageService.getImages()
    } catch (error) {
        console.log(error)
    }
}


}



