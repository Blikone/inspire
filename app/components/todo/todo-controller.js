(function(){
	var todoService = new TodoService();
	var todos = [];

	function updateTodos() {
		$('#todo-list').html('');
		todos = todoService.getTodos();
		todos.forEach(function(item) {
			$('#todo-list').append(`
				<div class="checkbox" id="${item.id}">
					<label>
						<input type="checkbox" ${item.chosen}>${item.description} <button type="button" class="close" id="${item.id}"><span>&times;</span></button>
					</label>
				</div>
			`)
		});
	}

	updateTodos(todoService.getTodos());

	function saveList(list) {
		todoService.saveTodos(list);
	}

	$('.add-to-list').on('submit', function(event) {
		event.preventDefault();
		var form = event.target;
		// debugger;
		var newTodo = {};
		newTodo.description = form.item.value;
		newTodo.chosen = '';
		newTodo.id = Math.ceil(Math.random()*1000000);
		console.log(newTodo);
		todos.push(newTodo);
		saveList(todos);
		updateTodos(todoService.getTodos());
		form.item.value = '';
	})

	$('#todo-list').on('click', '.checkbox', function(id) {
		// debugger;
		id = this.id;
		for (var i = 0; i < todos.length; i++) {
			if (todos[i].id == id) {
				if (todos[i].chosen) {
					todos[i].chosen = "";
				} else {
					todos[i].chosen = "checked";
				}
				saveList(todos);
				return;
			}
		}
	})
	
	$('#todo-list').on('click', '.close', function(id) {
		// debugger;
		id = this.id;
		for (var i = 0; i < todos.length; i++) {
			if (todos[i].id == id) {
				todos.splice(i,1);
				saveList(todos);
				updateTodos(todoService.getTodos());
				return;	
			}
		}
	})
	
}())
