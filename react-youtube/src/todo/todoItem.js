import React from "react";
import PropTypes from "prop-types";

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
	const clases = [];

	if (todoN.complited) {
		clases.push("done");
	}

	return (
		<li style={styles.li}>
			<span className={clases.join(" ")}>
				<input
					type="checkbox"
					style={styles.input}
					onChange={() => onChange(todoN.id)}
				/>
				<strong>{i + 1}</strong>
				&nbsp;
				{todoN.title}
			</span>
			<button className="buttonClose">&times;</button>
		</li>
	);
}

TodoItem.propTypes = {
	todoN: PropTypes.object.isRequired,
	i: PropTypes.number,
	onChange: PropTypes.func.isRequired,
};

export default TodoItem;
