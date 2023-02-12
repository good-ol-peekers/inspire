import { ValuesController } from "./Controllers/ValuesController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { TodoController } from "./Controllers/TodoController.js";

class App {
  // valuesController = new ValuesController();

  imagesController = new ImagesController();
  todoController = new TodoController();
}

window["app"] = new App();
