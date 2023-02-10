import { appState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { sandboxAPI } from "./AxiosService.js"

class ImageService {

async getImages() {
    const res = await sandboxAPI.get('/images')
    appState.images = new Image(res.data)
    console.log('getImages in service', res.data)
}


}


export const imageService = new ImageService()