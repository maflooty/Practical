// It should have place to store todos
var todos = ['Item 1', 'Item 2', 'Item 3'];

// It should have a way to display todos
console.log(todos); // to display todos in the console 

// It should have a way to add new todos
todos.push('Item 4');
console.log(todos);
todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

// It should have a way to change a todo
todos[0] = 'Item 1 updated'; //0=Item 1, 1=Item 2 and so on
console.log(todos);
todos = ['Item 1 updated', 'Item 2', 'Item 3', 'Item 4'];

// It should have a way to delete a todo
todos = ['Item 1 updated', 'Item 2', 'Item 3', 'Item 4'];
todos.splice(0,1); // Item 1 updated will be deleted
console.log(todos);
todos = ['Item 2', 'Item 3', 'Item 4'];