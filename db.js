const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
if (taskInput.value !== '') {
const li = document.createElement('li');
li.innerText = taskInput.value;
li.addEventListener('click', toggleTask);
taskList.appendChild(li);
taskInput.value = '';
saveTasks();
}
}

function toggleTask() {
this.classList.toggle('completed');
saveTasks();
}

function saveTasks() {
localStorage.setItem('tasks', taskList.innerHTML);
}

function loadTasks() {
const tasks = localStorage.getItem('tasks');
if (tasks) {
taskList.innerHTML = tasks;
const taskItems = document.querySelectorAll('li');
taskItems.forEach(item => {
item.addEventListener('click', toggleTask);
});
}
}

loadTasks();
