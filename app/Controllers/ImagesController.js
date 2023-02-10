import { appState } from "../AppState.js"
import { imageService } from "../Services/ImagesService.js"
import { Pop } from "../Utils/Pop.js"

function _drawImages() {
    document.body.style.backgroundImage = `url(${appState.images.url})`
    document.body.style.backgroundSize = imgElement.naturalWidth
}


export class ImagesController {

constructor() {
    this.getImages()
    appState.on('images', _drawImages)
}

async getImages() {
    try {
        await imageService.getImages() 
    } catch (error) {
        console.log(error)
        Pop.error(error)
    }
}
}



