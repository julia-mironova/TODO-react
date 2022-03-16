import React, { useEffect } from "react";
import TodoList from "./todo/todoList";
import Context from "./context";

import Loader from "./Loader";
import Modal from "./modal/modal";

const AddTodo = React.lazy(() => import("./todo/addTodo"));

function App() {
	const [todos, setTodos] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
			.then((response) => response.json())
			.then((todos) => {
				setTimeout(() => {
					setTodos(todos);
					setLoading(false);
				}, 2000);
			});
	}, []);

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
				<Modal />
				<React.Suspense fallback={<p>...loading</p>}>
					<AddTodo onCreate={addTodo} />
				</React.Suspense>

				{loading && <Loader />}
				{todos.length ? (
					<TodoList todoN={todos} onToggle={toggleTodo} />
				) : loading ? null : (
					<p>No todos</p>
				)}
			</div>
		</Context.Provider>
	);
}

export default App;
