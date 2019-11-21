// It should have a function to display todos
var todos = ['Item 1', 'Item 2', 'Item 3'];
function displayTodos() {
    console.log(todos);
}
displayTodos();

// It should have a function to add new todos
function addTodo(todo) {
todos.push(todo);
displayTodos();      //function in a function
}
addTodo('new todo');
todos = ['Item 1', 'Item 2', 'Item 3', 'new todo']; // 'new todo been added

// It should have a function to change a todo
function changeTodo(position,newValue) {
todos[position] = newValue;
displayTodos();
}
changeTodo(0,'changed');
todos = ['changed', 'Item 2', 'Item 3', 'new todo']; // first item has been changed

// It should have a function to delete a todo
function deleteTodo(position) {
    todos.splice(position,1);
    displayTodos();
}
deleteTodo(3);
todos = ['changed', 'Item 2', 'Item 3']; // 'new todo' = [3] has been deleted