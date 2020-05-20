var todos = [];

function onAddClick() {
	var newTodo = document.getElementById('newTodo').value;
	todos.push(newTodo);

	updateTodo();
}

function updateTodo() {
	var eleTodolist = document.getElementById('todo-list');
	eleTodolist.innerHTML = '';
	for (var i = 0; i < todos.length; i++) {
		eleTodolist.innerHTML += '<li>' + todos[i] + '</li>';
	 }
};