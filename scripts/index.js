let tasks = [];
let tasksList = document.getElementById('tasksList');


document.addEventListener('DOMContentLoaded', function() {
    JSON.parse(localStorage.getItem("savedTasks"));
    //console.log()
    showTasks();
})

tasksList.addEventListener('change', function(e) {
    let taskId = e.target.getAttribute('id');
    let valueLabel = tasksList.querySelector('[for='+ taskId +']').innerHTML;
    
    tasks.forEach((task) => {
        if (task.todo === valueLabel) {
            task.done = !task.done;
            localStorage.setItem("savedTasks", JSON.stringify(tasks));
        }
    });
});

let getTasks = () => {
    if (localStorage.getItem("savedTasks")) {
        tasks = JSON.parse(localStorage.getItem("savedTasks"));
    } else {
        tasks = [];
    }
}


let addTask = () => {
    let task = {
        todo: document.getElementById("newTask").value,
        done: false
    };
    tasks.push(task);
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
    showTasks()
}

let showTasks = () => {
    getTasks();
    let tasksFromLocal = '';
    tasks.forEach((task, i) => {
        tasksFromLocal += `<div>
            <input type='checkbox' id='item_${i}' ${task.done? 'checked' : ''}>
            <label for='item_${i}'>${task.todo}</label>
        </div>`;
    });
    document.getElementById("tasksInProcess").innerHTML = tasksFromLocal;
}

let deleteTasks = () => {
    localStorage.clear();
    getTasks();
    showTasks();
} 