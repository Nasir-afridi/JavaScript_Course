const todoList = [
  {name:'make dinner',
   dueDate:'2024-02-01'
},
  {name:'wash dishes',
   dueDate:'2024-02-01'
}
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
  const name = todoObject.name;
  const dueDate = todoObject.dueDate;
  const html =`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick = "
    todoList.splice(${index}, 1);
    renderTodoList();
    " class="delete-btn">Delete</button>
      `;
    todoListHTML = todoListHTML + html;
  });

  document.querySelector('.js-div')
  .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date');
  const dueDate = inputElement.value; 

  todoList.push({
    name: name,
    dueDate: dueDate,
  });
  console.log(todoList)

  inputElement.value = '';

  renderTodoList();
}