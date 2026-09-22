const STORAGE_KEY = "todos";

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function getTodos() {
  const list = document.getElementById("todo-list");
  return Array.from(list.children).map((item) => ({
    text: item.querySelector(".todo-text").textContent,
    completed: item.querySelector(".todo-checkbox").checked,
  }));
}

function persistTodos() {
  saveTodos(getTodos());
}

function addTodo(text, completed = false) {
  const list = document.getElementById("todo-list");

  const item = document.createElement("li");
  item.className = "todo-item";
  item.classList.toggle("todo-item-completed", completed);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-checkbox";
  checkbox.checked = completed;
  checkbox.addEventListener("change", () => {
    item.classList.toggle("todo-item-completed", checkbox.checked);
    persistTodos();
  });

  const label = document.createElement("span");
  label.className = "todo-text";
  label.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "todo-delete-button";
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", () => {
    item.remove();
    persistTodos();
  });

  item.appendChild(checkbox);
  item.appendChild(label);
  item.appendChild(deleteButton);

  list.appendChild(item);
}

function renderTodos() {
  loadTodos().forEach((todo) => addTodo(todo.text, todo.completed));
}

function initTodoForm() {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (text === "") {
      return;
    }

    addTodo(text);
    persistTodos();
    input.value = "";
    input.focus();
  });
}

renderTodos();
initTodoForm();
