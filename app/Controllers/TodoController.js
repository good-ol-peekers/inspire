import { todoService } from "../Services/TodoService.js"
import { Pop } from "../Utils/Pop.js"
import { getFormData } from "../Utils/FormHandler.js"
import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { EventEmitter } from "../Utils/EventEmitter.js"
import { Todo } from "../Models/Todo.js"

function _drawCount() {
    setHTML('count', Todo.CountTemplate())
}

function _drawTodo(){
    let template = ''
    appState.todos.forEach(t => template += t.TodoTemplate)
    setHTML('todos', template)
}

export class TodoController {
    constructor(){
        appState.on('todos', _drawCount)
        appState.on('todos', _drawTodo)
        this.getTodos()

        
    }
    
    async getTodos() {
        try {
           await todoService.getTodos()
        } catch (error) {
            console.log(error )
        }
    }

    async deleteTodo(todoId) {
    
        try { 
           if( await Pop.confirm('are you sure you want to delete this?')) {
               await todoService.deleteTodo(todoId)
           }
            
    } catch (error) {
        console.log(error)
    }
}
    async updateTodo(id){
        try {
          await  todoService.updateTodo(id)
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