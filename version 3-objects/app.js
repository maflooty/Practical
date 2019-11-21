// It should store the todos array on an object
// var todos = ['Item 1', 'Item 2', 'Item 3'];
var todoList = {
    todos: ['Item 1', 'Item 2', 'Item 3'],
 
    // It should have a displayTodos method
    displayTodos: function() {
    console.log('My Todos', this.todos)
    },
    
    //It should have an addTodo method
     addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();      
        },

    // It should have a changeTodo method  
    changeTodo: function(position,newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },

    // It should have a deleteTodo method
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },
};
todoList.displayTodos(); // My Todos (3) ['Item 1', 'Item 2', 'Item 3'];
todoList.addTodo('Mustapha'); // My Todos (4) ["Item 1", "Item 2", "Item 3", "Mustapha"];
todoList.changeTodo(0,'Evan'); // My Todos (4) ["Evan", "Item 2", "Item 3", "Mustapha"];
todoList.deleteTodo(1); // My Todos (3) ["Evan", "Item 3", "Mustapha"];