import { Item } from "./Item.js";
import { items } from "./items.js";

const refs = {
  list: document.querySelector(".list"),
  form: document.querySelector(".form"),
};

const render = () => {
  const list = items.map(Item).join("");

  refs.list.innerHTML = "";

  refs.list.insertAdjacentHTML("beforeend", list);
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const { value } = evt.target.elements.text;

  const payload = {
    text: value,
    isDone: false,
  };

  refs.form.reset();

  items.push(payload);

  render();
};

render();
refs.form.addEventListener("submit", onFormSubmit);
