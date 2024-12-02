document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit = document.querySelector(".todo-submit");
  const todoList = document.querySelector(".todo-list");

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();

    // Error handling
    if (todoText !== "") {
      addTodo(todoText);

      todoInput.value = "";
    } else {
      alert("Please enter a valid task.");
    }
  });

  function addTodo(todoText) {
    const todoItem = document.createElement("li");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");

    todoItem.innerHTML = `<span>${todoText}</span>`;
    editButton.innerText = "✏️";
    removeButton.innerText = "❌";

    todoItem.appendChild(editButton);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  }
});
