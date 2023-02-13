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
    //document.body.style.backgroundSize = imgElement.naturalWidth
}

function _getTime() {
    let time = new Date().toTimeString();
    // console.log (time)
    setText('dateTime', time)
}
setInterval(_getTime, 1000)




function _drawWeather() {
   
    setHTML('weather', appState.weather.WeatherCard)
}

function _drawQuotes() {
    
    setHTML('quotes', appState.quotes.QuotesTemplate)
}




export class ImagesController {
    
    constructor() {
        this.getImages()
        this.getWeather()
        appState.on('images', _drawImages)
        appState.on('weather', _drawWeather)
        appState.on('quotes', _drawQuotes)
        appState.on('tempUnits', _drawWeather)
        _getTime()
        //_drawWeather()
        this.getQuotes()
    }
     changeTemp() {
        if(appState.tempUnits == 'f') {
        appState.weather.temp = fToC(appState.weather.temp)
        appState.tempUnits = 'c'
        console.log("changing to c")
        } else { 
            appState.weather.temp = ctoF(appState.weather.temp)
            appState.tempUnits = 'f'
            console.log("changing to f")
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
        await imageService.getQuotes()
    } catch (error) {
        console.log(error)
    }
}


}



