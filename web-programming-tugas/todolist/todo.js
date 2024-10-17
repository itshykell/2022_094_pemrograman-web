// JavaScript for To Do List (todo.js)
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;

    if (task === "") return;

    let taskList = document.getElementById("taskList");

    let listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${task}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(listItem);
    taskInput.value = "";
}

function deleteTask(button) {
    button.parentNode.remove();
}
