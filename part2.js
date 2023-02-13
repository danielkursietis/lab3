var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log(task + " was added at index " + tasks.indexOf(task));
    return tasks.length;
}
function listAllTasks(tasks) {
    for (var i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
    }
}
function deleteTasks(task) {
    var index = tasks.indexOf(task);
    tasks.splice(index, 1);
    console.log(task + " was removed at index " + index);
    return tasks.length;
}
console.log(addTask("Eat"));
console.log(addTask("Work"));
console.log(addTask("Sleep"));
listAllTasks(tasks);
console.log(deleteTasks("Work"));
