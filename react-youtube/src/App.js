import React from "react";
import TodoList from "./todo/todoList";

function App() {
	const [todos, setTodos] = React.useState([
		{ id: 1, iscomplite: false, title: "bye bread" },
		{ id: 2, iscomplite: false, title: "bye milk" },
		{ id: 3, iscomplite: false, title: "bye meet" },
		{ id: 4, iscomplite: false, title: "bye sol" },
	]);

	function toggleTodo(id) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.complited = !todo.complited;
				}
				return todo;
			})
		);
	}

	return (
		<div className="wrapper">
			<h1>React tutorial</h1>

			{<TodoList todoN={todos} onToggle={toggleTodo} />}
		</div>
	);
}

export default App;
