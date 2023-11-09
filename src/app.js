import { addBtn } from "./core/selectors";
import { addBtnHandler } from "./handler";

export default class ToDoApp {
  constructor() {}
  init() {}

  handler() {
    addBtn.addEventListener("click", addBtnHandler);
  }
}
