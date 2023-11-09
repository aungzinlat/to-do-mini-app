import { addTextInput, taskCard } from "./core/selectors";

let id = 0;

export const addBtnHandler = () => {
  const li = document.createElement("li");
  li.classList.add(
    "task",
    "animate__animated",
    "animate__slideInLeft",
    "duration-300"
  );
  const idCount = id++;

  const text = addTextInput.value;

  li.innerHTML = `
  <input
    id="${idCount}"
    type="checkbox"
    value=""
    name="bordered-checkbox"
    class="checkbox-primary w-6 h-6 bg-neutral-100 border-neutral-300 rounded"
  />
  <label
    for="${idCount}"
    class="w-full text-xl py-4 ml-2 font-medium text"
    >${text}</label
  >
  `;

  taskCard.append(li);
  addTextInput.value = "";

  return li;
};
