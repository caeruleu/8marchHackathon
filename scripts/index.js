document.addEventListener('DOMContentLoaded', function() {
    
    //console.log()
    //showTasks();
})

let tasks = [];

if (localStorage.getItem("savedTasks")) {
    tasks = JSON.parse(localStorage.getItem("savedTasks"));
}

let addTask = () => {
    let task = document.getElementById("newTask").value;
    tasks.push(task);
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
}