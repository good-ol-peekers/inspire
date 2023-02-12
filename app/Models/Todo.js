export class Todo {
    constructor(data) {
        this.id = data.id  
    this.completed = data.completed 
    this.user = data.user 
    this.description = data.description
   
    }



}





// id: {type: String, required: true, unique: true }

//     completed: { type: Boolean, required: true, default: false},

//     user: { type: String, required: true },

//     //You will need to provide a description
//     description: { type: String, required: true},