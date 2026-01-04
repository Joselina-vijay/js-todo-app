// Load tasks from localStorage or start empty
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Get the task list element
const taskList = document.getElementById("taskList");

// Render tasks on screen
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <span class="delete" onclick="deleteTask(${index})">✖</span>
    `;
    taskList.appendChild(li);
  });
}

// Add a new task
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") return; // ignore empty input

  tasks.push(task); // add to array
  localStorage.setItem("tasks", JSON.stringify(tasks)); // save
  input.value = ""; // clear input
  renderTasks(); // refresh list
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1); // remove from array
  localStorage.setItem("tasks", JSON.stringify(tasks)); // update storage
  renderTasks(); // refresh list
}

// Initial render
renderTasks();
