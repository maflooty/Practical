var todoList = {
    todos: [],
    displayTodos: function() {
      if (this.todos.length === 0) {
        console.log('Your todo list is empty');
      } else {
        console.log('My Todos:');
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true){
            console.log('(x)', this.todos[i].todoText);
            } else {
              console.log('()', this.todos[i].todoText);
              }
        }
      }
    },
    addTodo: function(todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
      this.displayTodos();
    },
    changeTodo: function(position, todoText) {
      this.todos[position].todoText = todoText;
      this.displayTodos();
    },
    deleteTodos: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    },
    toggleCompleted: function(position) {
      let todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
    },
    toggleAll: function() {
      var totalTodos = this.todos.length;
      var completedTodos = 0;
    // Get number of completed todos
      for (var i=0 ; i<totalTodos ; i++) {
        if (this.todos[i].completed === true) {
          completedTodos++;
          }
        }
    // Case 1:if everything is true, make everything false
        if (completedTodos === totalTodos){
          for (var i=0 ; i<totalTodos ; i++){
            this.todos[i].completed = false;
            }      
    // Case 1:Otherwise, make everything true
        } else {
          for (var i=0 ; i<totalTodos ; i++){
            this.todos[i].completed = true;
            } 
        }
        this.displayTodos();
      }
    };
var handler = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
      let addTodoTextInput = document.getElementById('addTodoTextInput');
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = '';
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.value, changeTodoTextInput.value);
    changeTodoTextInput.value = '';
    changeTodoPositionInput.value = '';
  },
  deleteTodos: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodos(deleteTodoPositionInput.value);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.value);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
}