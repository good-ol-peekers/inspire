import { appState } from "../AppState.js"

export class Todo {
    constructor(data) {
        this.id = data.id  
    this.completed = data.completed 
    this.user = data.user 
    this.description = data.description
   
    }

    static CountTemplate() {
        return `
        <h3 class="text-center textStyle"> Number of Tasks ${appState.todos.filter(n => n.completed == false).length} 
        </h3>
        `
    }

    get TodoTemplate() {
        return `
            <div id='${this.id}' class="form-check mt-3">
            <div class="d-flex justify-content-around">
                <input title="On Click Mark Task Completed" class="mx-1 mt-3 form-check-input" onclick="app.todoController.updateTodo('${this.id}')" type="checkbox" value="" id="checkbox" ${this.completed ? "checked" : ""}>
                    <label class="form-check-label mx-2 mt-2 textStyle" for="todo">${this.description}</label>
                    <button title="On Click Delete Task" class="btn textStyle" type="button" onclick="app.todoController.deleteTodo('${this.id}')" id="deleteTask"><i class="mdi mdi-delete-circle"></i></button>
                    </div>
            </div>
        `
    }

}





// id: {type: String, required: true, unique: true }

//     completed: { type: Boolean, required: true, default: false},

//     user: { type: String, required: true },

//     //You will need to provide a description
//     description: { type: String, required: true},