import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
	li: {
		display: "flex",
		justifyContent: "space-between",
		aliginItems: "center",
		padding: "0.5rem 1rem",
		border: "1px solid #ccc",
		borderRadius: "4px",
		marginBottom: ".5rem",
	},
	input: {
		marginRight: "1rem",
	},
};

function TodoItem({ todoN, i, onChange }) {
	const { remove } = useContext(Context);
	const clases = [];

	if (todoN.completed) {
		clases.push("done");
	}

	return (
		<li style={styles.li}>
			<span className={clases.join(" ")}>
				<input
					type="checkbox"
					checked={todoN.completed}
					style={styles.input}
					onChange={() => onChange(todoN.id)}
				/>
				<strong>{i + 1}</strong>
				&nbsp;
				{todoN.title}
			</span>
			<button className="buttonClose" onClick={remove.bind(null, todoN.id)}>
				&times;
			</button>
		</li>
	);
}

TodoItem.propTypes = {
	todoN: PropTypes.object.isRequired,
	i: PropTypes.number,
	onChange: PropTypes.func.isRequired,
};

export default TodoItem;
