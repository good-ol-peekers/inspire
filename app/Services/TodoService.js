import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";

class TodoService {

async createTodo(formData){
    console.log('this is what the formData looks like', formData)
     const res = await sandboxApi.post('/ThomasPeek/todos', formData)
     console.log('[new todo]', res.data);
    let newTodo = new Todo(res.data)
    appState.todos.push(newTodo)
    appState.emit('todos')
}

async deleteTodo(todoId) {
    const res = await sandboxApi.delete('/ThomasPeek/todos/' + todoId)
    console.log(res)

}

}

export const todoService = new TodoService() 