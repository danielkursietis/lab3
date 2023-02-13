let tasks: string[] = [];

function addTask(task: string): number {
    tasks.push(task);
    console.log(task + " was added at index " + tasks.indexOf(task));
    return tasks.length;
}

function listAllTasks(tasks: string[]) {
    for (let i: number = 0; i < tasks.length; i++){
        console.log(tasks[i]);
    }
}

function deleteTasks(task: string): number {
    let index: number = tasks.indexOf(task);
    if (index > -1){
        tasks.splice(index, 1);
        console.log(task + " was removed at index " + index);
    }
    else{
        console.log("Task "+task+" not present in array.");
    }
    return tasks.length;
}

console.log(addTask("Eat"));
console.log(addTask("Work"));
console.log(addTask("Sleep"));
listAllTasks(tasks);
console.log(deleteTasks("Work"));