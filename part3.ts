interface TodoInterface{
    Tasks: string[];
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
}

class Todo implements TodoInterface{
    constructor(){}

    Tasks: string[] = [];

    addTask(task: string): number {
        this.Tasks.push(task);
        console.log(task + " was added at index " + this.Tasks.indexOf(task));
        return this.Tasks.length;
    }

    listAllTasks() {
        for (let i: number = 0; i < this.Tasks.length; i++)
            console.log(this.Tasks[i]);
    }

    deleteTask(task: string): number {
        let index: number = this.Tasks.indexOf(task);
        if (index > -1){
            this.Tasks.splice(index, 1);
            console.log(task + " was removed at index " + index);
        }
        else{
            console.log("Task "+task+" not present in array.");
        }
        return this.Tasks.length;
    }
}

let myTodo = new Todo();

myTodo.addTask("Eat");
myTodo.addTask("Work");
myTodo.addTask("Sleep");
myTodo.listAllTasks();
myTodo.deleteTask("Work");
myTodo.listAllTasks();
