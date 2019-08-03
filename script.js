const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const task = document.querySelector('#task');
  if (task.value) {
    const id = Math.random() + '';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;
    checkbox.addEventListener('click', countCheckedTask);

    const button = document.createElement('button');
    button.innerText = 'X';
    button.className = 'button-delete';
    button.classList.add(classNames.TODO_DELETE);
    button.addEventListener('click', deleteTask);

    const label = document.createTextNode(task.value);
    label.className = classNames.TODO_TEXT;

    const firstParagraph = document.createElement('p');
    firstParagraph.append(checkbox);
    firstParagraph.append(label);
    const paragraph = document.createElement('p');
    paragraph.className = 'task-list';
    paragraph.append(firstParagraph);
    paragraph.append(button);

    const li = document.createElement ('li');
    li.append(paragraph);

    list.append(li);
    let count = parseInt(itemCountSpan.innerText);
    itemCountSpan.innerText = count + 1;

    let uncheckedCount = parseInt(uncheckedCountSpan.innerText);
    uncheckedCount += 1;
    uncheckedCountSpan.innerText = uncheckedCount;
    task.value = '';
  }
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
}

function countCheckedTask(event) {
  let checked = event.target.checked;
  let uncheckedCount = parseInt(uncheckedCountSpan.innerText);
  if (checked) {
      uncheckedCount -= 1;
  } else {
    uncheckedCount += 1;
  }
  uncheckedCountSpan.innerText = uncheckedCount;
}

function deleteTask() {
  let uncheckedCount = parseInt(uncheckedCountSpan.innerText);
  let paragraph = this.parentNode;
  let isChecked = paragraph.firstChild.firstChild.checked;
  uncheckedCount = isChecked ? uncheckedCount : uncheckedCount - 1;
  let li = paragraph.parentNode;
  let ui = li.parentNode;
  ui.removeChild(li);
  let count = parseInt(itemCountSpan.innerText);
  count -= 1;

  uncheckedCountSpan.innerText = uncheckedCount;
  itemCountSpan.innerText = count;
}
