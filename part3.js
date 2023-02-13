var Todo = /** @class */ (function () {
    function Todo() {
        this.Tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log(task + " was added at index " + this.Tasks.indexOf(task));
        return this.Tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.Tasks.length; i++)
            console.log(this.Tasks[i]);
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " was removed at index " + index);
        }
        else {
            console.log("Task " + task + " not present in array.");
        }
        return this.Tasks.length;
    };
    return Todo;
}());
var myTodo = new Todo();
myTodo.addTask("Eat");
myTodo.addTask("Work");
myTodo.addTask("Sleep");
myTodo.listAllTasks();
myTodo.deleteTask("Work");
myTodo.listAllTasks();
