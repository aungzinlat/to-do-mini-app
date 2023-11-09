import "./src/index.css";
import "flowbite";
import "daisyui";
import ToDoApp from "./src/app";

const App = new ToDoApp();

App.init();
App.handler();
