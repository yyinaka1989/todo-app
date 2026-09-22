function addTodo(text) {
  const list = document.getElementById("todo-list");

  const item = document.createElement("li");
  item.className = "todo-item";
  item.textContent = text;

  list.appendChild(item);
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
    input.value = "";
    input.focus();
  });
}

initTodoForm();
