import { todoService } from "../Services/TodoService.js"
import { Pop } from "../Utils/Pop.js"
import { getFormData } from "../Utils/FormHandler.js"


export class TodoController {
    constructor(){

    }

async deleteTodo(todoId) {
    try {
        await todoService.deleteTodo(todoId)
    } catch (error) {
        console.log(error)
    }
}

    async createTodo(){
try {
     window.event.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
    await todoService.createTodo(formData)
} catch (error) {
    console.log(error) 
    Pop.error(error)
    }
}
}