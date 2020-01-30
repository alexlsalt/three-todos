let toDoItems = [];
const list = document.querySelector('#to-do-list');

// Add an item to the toDoItems array

function addToDo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now()
  };

  if (text === '') {
    return;
  } // User cannot enter a blank item onto list

  if (toDoItems.length < 3) {
    toDoItems.push(todo);
  } else {
    alert("Whoa there - let's not get ahead of ourselves. Remember: three is the magic number here :)");
    return;
  } // User cannot enter more than three items to the list

  list.insertAdjacentHTML('beforeend', `
    <li class="todo-item" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox" />
      <span>${todo.text}</span>
    </li>
  `);
}

const form = document.querySelector('.js-form');
const clearAllButton = document.querySelector('#clear-all');
const emptyState = document.querySelector('.empty-state');

// On 'submit,' list will update with list item

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const input = document.querySelector('#input');
  const text = input.value;
  addToDo(text);
  input.value = '';
  clearAllButton.style.display = 'block';
  emptyState.style.display = 'none';
});


// Clears all items from rendered list
const clearAllItems = function() {
  toDoItems = [];
  list.innerHTML = '';
  clearAllButton.style.display = 'none';
  emptyState.style.display = 'block';
};

clearAllButton.addEventListener('click', clearAllItems);

