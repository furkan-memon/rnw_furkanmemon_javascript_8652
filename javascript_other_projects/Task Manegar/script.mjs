
// Add Task section
const addTaskSection = document.querySelector('#Add-task');
const taskInput = document.querySelector('#task-input');
const taskPriority = document.querySelector('#tasks-priority');
const taskDate = document.querySelector('#task-date');
const addTaskButton = document.querySelector('#add-task-button');

// Search section
const searchTaskSection = document.querySelector('#search-task');
const searchInput = document.querySelector('#search-input');
const searchPriority = document.querySelector('#search-priority');

 let editindex = null;

function getLocalTasks() {
  
    return JSON.parse(localStorage.getItem('tasksmanager')) || [];
}
function savelocalTasks(obj) {
    let oldtask = JSON.parse(localStorage.getItem('tasksmanager')) || [];
    oldtask.push(obj);
    localStorage.setItem('tasksmanager', JSON.stringify(oldtask));
   
}

taskInput.addEventListener('input', (e) => {
    e.preventDefault();

    const tasks = getLocalTasks();

    // EDIT MODE
    if (editindex !== null) {
        tasks[editindex].task = taskInput.value;
        tasks[editindex].priority = taskPriority.value;
        tasks[editindex].date = taskDate.value;

        localStorage.setItem('tasksmanager', JSON.stringify(tasks));

        editindex = null;
        document.querySelector('#tasks-list').innerHTML = '';
        tasks.forEach(t => renderTask(t));
        return;
    }

    // ADD MODE
    const taskobj = {
        id: Date.now(),
        task: taskInput.value,
        priority: taskPriority.value,
        date: taskDate.value
    };

    savelocalTasks(taskobj);
    renderTask(taskobj);
});

function  renderTask(t){
     const taskitem = document.createElement('div');
    taskitem.classList = 'task-item';
        taskitem.innerHTML = `
        <div class="task-item">
                <div class="task-header">

                    <span class="task-priority top">${t.priority}</span>
                    <div class="task-actions">
                    <button class="edit-task-button" onclick="editTask(${t.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="#57595B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-pencil-icon lucide-pencil">
                            <path
                                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                            <path d="m15 5 4 4" />

                        </svg>
                    </button>
                    <button class="delete-task-button" onclick="deleteTask(${t.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="#57595B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-trash2-icon lucide-trash-2">
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M3 6h18" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                    </button>
</div>
                </div>
                <p class="task-text">${t.task}</p>
                <span class="date"> ${t.date}</span>

            </div>
        `
        
document.querySelector('#tasks-list').appendChild(taskitem);
    
}

document.addEventListener('DOMContentLoaded', () => {
     const tasks = getLocalTasks();
    tasks.forEach(t => {
        renderTask(t); // function that adds task to DOM
    })
})
window.editTask = function (id) {
   let task = getLocalTasks()
   const index  = task.findIndex(t => t.id === id);
   editindex = index ;
   if(index == -1) return;
    const indexData = task[index];
   taskInput.value = indexData.task;
   taskPriority.value = indexData.priority;
   taskDate.value = indexData.date;
//   editindex = index
}
window.deleteTask = function (id) {
    const tasks = getLocalTasks()
    const fillteretasks = tasks.findIndex(t => t.id === id);
    if(fillteretasks == -1) return;
    tasks.splice(fillteretasks,1);
    localStorage.setItem('tasksmanager', JSON.stringify(tasks));
    document.querySelector('#tasks-list').innerHTML = '';
    tasks.forEach(t => renderTask(t));
} 
searchInput.addEventListener('input', () => {

    const task = getLocalTasks();
         let inp = searchInput.value.trim().toLowerCase()
         document.querySelector('#tasks-list').innerHTML = ``
      let fillteretasks;
      fillteretasks = task.filter(t => 
   
   
    t.task.toLowerCase().includes(inp)
    
   )
    fillteretasks.forEach(t => renderTask(t)
      )
})
searchPriority.addEventListener('change', () => {

    const task = getLocalTasks();
         let inp = searchPriority.value.toLowerCase()
         document.querySelector('#tasks-list').innerHTML = ``
      let fillteretasks;
      if(inp === 'all'){
        fillteretasks = task
      }else{

          fillteretasks = task.filter(t => 
        t.priority.toLowerCase().includes(inp)
          )
      }

      fillteretasks.forEach(t => renderTask(t)
   )
   
})

