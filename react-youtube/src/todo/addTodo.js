import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo({ onCreate }) {
	const [value, setValue] = useState("");

	function onSubHandler(e) {
		e.preventDefault();

		if (value.trim()) {
			onCreate(value);
		}
	}

	return (
		<form style={{ marginBottom: "1rem" }} onSubmit={onSubHandler}>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
			<button type="submit">Add todo</button>
		</form>
	);
}

AddTodo.propTypes = {
	onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
