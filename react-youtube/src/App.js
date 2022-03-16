import React from "react";
import TodoList from "./todo/todoList";
import Context from "./context";
import AddTodo from "./todo/addTodo";

function App() {
	const [todos, setTodos] = React.useState([
		{ id: 1, completed: false, title: "bye bread" },
		{ id: 2, completed: false, title: "bye milk" },
		{ id: 3, completed: false, title: "bye meet" },
		{ id: 4, completed: false, title: "bye sol" },
	]);

	function toggleTodo(id) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	}

	function removeTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	function addTodo(title) {
		setTodos(
			todos.concat([
				{
					title: title,
					completed: false,
					id: Date.now(),
				},
			])
		);
	}

	return (
		<Context.Provider value={{ remove: removeTodo }}>
			<div className="wrapper">
				<h1>React tutorial</h1>
				<AddTodo onCreate={addTodo} />
				{todos.length ? (
					<TodoList todoN={todos} onToggle={toggleTodo} />
				) : (
					<p>No todos</p>
				)}
			</div>
		</Context.Provider>
	);
}

export default App;
