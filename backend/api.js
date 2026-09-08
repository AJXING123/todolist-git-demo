let todos = [];

function createTodo(title) {
  const todo = { id: Date.now(), title, done: false };
  todos.push(todo);
  return todo;
}

function getTodos() {
  return todos;
}

function updateTodo(id, done) {
  const todo = todos.find(t => t.id === id);
  if (todo) todo.done = done;
  return todo;
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
}

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };

// 待办筛选接口
function filterTodos(status) {
  if (status === 'done') return todos.filter(t => t.done);
  if (status === 'undone') return todos.filter(t => !t.done);
  return todos;
}

module.exports = { createTodo, getTodos, updateTodo, deleteTodo, filterTodos };
