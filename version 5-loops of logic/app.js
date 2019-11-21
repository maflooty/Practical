var todoList = {
    todos: [],
    displayTodos: function() { 
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        } else {
            console.log('My Todos:')
        for(var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
            console.log('(x)', this.todos[i].todoText);
        } else {
            console.log('()', this.todos[i].todoText);
        }
    } 
 }
   // .displayTodos should show .todoText
   /* console.log('My Todos:')
    for(var i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].todoText);
    } */
},
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
//todoList.addTodo('first'); // My todos: first has been added
//todoList.addTodo('second'); // My todos: second has been added
//todoList.displayTodos(); // Your todo list is empty!
todoList.addTodo('first'); // My todos: () first
todoList.toggleCompleted(0); // (x) first