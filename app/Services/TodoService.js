import { Todo } from "../Models/Todo";

class TodoService {

async createTodo(formData){
     const res = await sandboxApi.post('/thomasPeek/todos', formData)
     console.log('[new todo]', res.data);
    let newTodo = new Todo(res.data)
    appState.push(newTodo)
    appState.emit('cars')
}

}

export const todoService = new TodoService() 