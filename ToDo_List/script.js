document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});