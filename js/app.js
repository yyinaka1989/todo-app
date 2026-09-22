function addTodo(text) {
  const list = document.getElementById("todo-list");

  const item = document.createElement("li");
  item.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-checkbox";
  checkbox.addEventListener("change", () => {
    item.classList.toggle("todo-item-completed", checkbox.checked);
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
  });

  item.appendChild(checkbox);
  item.appendChild(label);
  item.appendChild(deleteButton);

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
