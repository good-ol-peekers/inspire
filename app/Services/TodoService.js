import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxAPI } from "./AxiosService.js"

class TodoService {

async createTodo(formData){
    console.log('this is what the formData looks like', formData)
    const res = await sandboxAPI.post('/ThomasPeek/todos', formData)
    console.log('[new todo]', res.data);
    let newTodo = new Todo(res.data)
    appState.todos.push(newTodo)
    appState.emit('todos')
}

async deleteTodo(todoId) {
    const res = await sandboxAPI.delete('/ThomasPeek/todos/' + todoId)
    console.log(res)
    appState.todos = appState.todos.filter(t => t.id != todoId)

}

async getTodos() {
    const res = await sandboxAPI.get('/ThomasPeek/todos')
    appState.todos = res.data.map(t => new Todo(t))
}

async updateTodo(id){
    let updatedTodo = appState.todos.find(t => t.id == id)
    updatedTodo.completed = !updatedTodo.completed
    const res = await sandboxAPI.put('/thomaspeek/todos/' + id, updatedTodo)
    appState.emit('todos')
    console.log("check clicked")

}

}

export const todoService = new TodoService() 