import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./todoItem";

const styles = {
	ul: {
		listStyle: "none",
		margin: 0,
		padding: 0,
	},
};

function TodoList(props) {
	return (
		<ul style={styles.ul}>
			{props.todoN.map((todo, index) => {
				return (
					<TodoItem
						todoN={todo}
						key={todo.id}
						i={index}
						onChange={props.onToggle}
					/>
				);
			})}
		</ul>
	);
}

TodoList.propTypes = {
	todoN: PropTypes.arrayOf(PropTypes.object).isRequired,
	onToggle: PropTypes.func.isRequired,
};

export default TodoList;
