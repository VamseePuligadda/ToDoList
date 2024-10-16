document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt'; // Font Awesome trash icon
    deleteIcon.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(deleteIcon);
    taskList.appendChild(li);
    taskInput.value = ''; // Clear input field
}
