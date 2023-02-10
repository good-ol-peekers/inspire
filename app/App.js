import { ValuesController } from "./Controllers/ValuesController.js";
import { ImagesController } from "./Controllers/ImagesController.js";


class App {
  // valuesController = new ValuesController();

  imagesController = new ImagesController();
}

window["app"] = new App();
