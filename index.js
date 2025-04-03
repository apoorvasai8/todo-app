const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
addButton.addEventListener("click", addTask);
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="btn complete-button">Complete</button>
            <button class="btn edit-button">Edit</button>
            <button class="btn delete-button">Delete</button>
        </div>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        const completeButton = li.querySelector(".complete-button");
        const deleteButton = li.querySelector(".delete-button");
        const editButton = li.querySelector(".edit-button");
        const taskTextElement = li.querySelector(".task-text");

        completeButton.addEventListener("click", () => {
            taskTextElement.classList.toggle("completed");
            alert("Task completed!");
        });
        deleteButton.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this task?")) {
                taskList.removeChild(li);
                alert("Task deleted!");
                }
        });
        editButton.addEventListener("click", () => {
            if(taskTextElement.classList.contains("completed")){
                alert("Can't Edit Task...as it is completed");
            }
            else {
                const newText = prompt("Edit task:", taskTextElement.textContent);
            if (newText !== null) {
                taskTextElement.textContent = newText;
                alert("Task edited!");
            }
            }
        });
    }
}