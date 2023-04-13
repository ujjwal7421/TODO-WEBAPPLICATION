const form = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

// create todo
function createTodoItem(todoText) {
  // create list item
  const listItem = document.createElement('li');

  // create input checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    listItem.classList.toggle('completed');
  });

  // create todo text element
  const todo = document.createElement('span');
  todo.classList.add('todo');
  todo.textContent = todoText;

  // create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });

  // add todo, checkbox, and delete button to list item
  listItem.appendChild(checkbox);
  listItem.appendChild(todo);
  listItem.appendChild(deleteButton);

  return listItem;
}

// handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText.length > 0) {
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    todoInput.value = '';
  }
}

form.addEventListener('submit', handleFormSubmit);