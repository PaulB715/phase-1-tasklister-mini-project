document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', function(event){
    event.preventDefault();
    const taskDescription = document.getElementById('new-task-description').value;
    const task = {
      id: generateTaskId(),
      description: taskDescription,
      priority: 'medium',
      
    };
    taskList.push(task);
    document.getElementById('new-task-description').value = '';
    updateTaskList(); 
  })
});
const deleteButton = document.createElement('button');
deleteButton.innerText = 'Delete';
deleteButton.addEventListener('click', function() {
  const taskId = task.id;

  const taskIndex = taskList.findIndex(function(item) {
    return item.id === taskId;
  });

  if (taskIndex !== -1) {
    taskList.splice(taskIndex, 1);
  }
});

