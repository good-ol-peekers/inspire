export class Todo {
    constructor(data) {
        this.id = data.id  
    this.completed = data.completed 
    this.user = data.user 
    this.description = data.description
   
    }

    get TodoTemplate() {
        return `
            <div id='${this.id}' class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkbox">
                <label class="form-check-label" for="todo">${this.description}</label>
                <button class="btn btn-outline-danger" type="button" onclick="app.todoController.deleteTodo('${this.id}')" id="deleteTask">delete</button>
            </div>
        `
    }

}





// id: {type: String, required: true, unique: true }

//     completed: { type: Boolean, required: true, default: false},

//     user: { type: String, required: true },

//     //You will need to provide a description
//     description: { type: String, required: true},