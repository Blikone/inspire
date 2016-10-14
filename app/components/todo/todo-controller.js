(function(){
	var todoService = new TodoService();
	var todos = [];

	function updateTodos() {
		$('#todo-list').html('');
		todos = todoService.getTodos();
		todos.forEach(function(item) {
			$('#todo-list').append(`
				<div class="checkbox">
					<label>
						<input type="checkbox">${item} <button type="button" class="close"><span>&times;</span></button>
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
		todos.push(form.item.value);
		saveList(todos);
		updateTodos(todoService.getTodos());
		form.item.value = '';
	})
	
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	
	
	
}())
