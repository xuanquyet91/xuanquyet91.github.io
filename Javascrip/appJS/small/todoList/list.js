var todos = [];

function onAddClick() {
	var newTodo = document.getElementById('newTodo').value;
	todos.push(newTodo);

	updateTodo();

	document.getElementById('newTodo').value = '';
}

function updateTodo() {
	var eleTodolist = document.getElementById('todo-list');
	eleTodolist.innerHTML = '';
	for (var i = 0; i < todos.length; i++) {
		eleTodolist.innerHTML += '<li onclick="removeTodo('+ i +');">' + todos[i] + '</li>';
	 }
};

function removeTodo(index){
	todos.splice(index,1);

	updateTodo();
}