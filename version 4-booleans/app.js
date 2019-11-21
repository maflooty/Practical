var todoList = {
    todos: [],
    displayTodos: function() {
    console.log('My Todos', this.todos)
    },
    // todoList.addTodo should add objects
     addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
     });
        this.displayTodos();      
        },

     // todoList.changeTodo should change the todoText property
     changeTodo: function(position,todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },

    // todoList.toggleCompleted should change the completed property
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};
todoList.addTodo('Watch tv'); // My Todos 0: {todoText: "Watch tv", completed: false}
todoList.changeTodo(0,'Sleeping Time'); // My Todos 0: {todoText: "Sleeping Time", completed: false}
todoList.toggleCompleted(0); // My Todos 0: {todoText: "Sleeping Time", completed: true}