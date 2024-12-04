// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const warningMessage = document.getElementById('warningMessage');

// Function to add a new task
function addTask() {
  const taskName = taskInput.value.trim();
  //used to remove any leading (spaces before the text)

  // Show warning if input is empty
  if (taskName === '') {
    warningMessage.textContent = 'Please write something.';
    //none by default change it to visible by block
    warningMessage.style.display = 'block';
    //returns
    return;
  }

  // Hide warning if there's text in input
  warningMessage.style.display = 'none';

  // Create task item elements
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');

  const taskNameSpan = document.createElement('span');
  taskNameSpan.classList.add('task-name');
  taskNameSpan.textContent = taskName;

  const completeBtn = document.createElement('button');
  completeBtn.classList.add('complete-btn');
  completeBtn.textContent = 'Completed';
  completeBtn.onclick = () => taskNameSpan.classList.toggle('completed');

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => taskItem.remove();

  // Append elements to task item and list
  taskItem.appendChild(taskNameSpan);
  taskItem.appendChild(completeBtn);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
  //full list

  // Clear input field
  taskInput.value = '';
}

// Event listener for add task button
addTaskBtn.addEventListener('click', addTask);


