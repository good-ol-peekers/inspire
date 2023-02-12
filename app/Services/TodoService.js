import { Todo } from "../Models/Todo.js";

class TodoService {

async createTodo(formData){
     const res = await sandboxApi.post('/ThomasPeek/todos', formData)
     console.log('[new todo]', res.data);
    let newTodo = new Todo(res.data)
    appState.push(newTodo)
    appState.emit('cars')
}

}

export const todoService = new TodoService() 