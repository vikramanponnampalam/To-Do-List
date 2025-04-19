function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">Delete</button>
    `;
  
    document.getElementById('taskList').appendChild(li);
    taskInput.value = "";
  }
  
  function removeTask(button) {
    button.parentElement.remove();
  }
  