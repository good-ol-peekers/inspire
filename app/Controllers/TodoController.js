import { todoService } from "../Services/TodoService"
import { Pop } from "../Utils/Pop.js"

export class TodoController {
    constructor(){

    }

    async createTodo(){
try {
     window.event.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
    await todoService.createTodo(formData)
} catch (error) {
    console.log(error)
}   Pop
    }
}