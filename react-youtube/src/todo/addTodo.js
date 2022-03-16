import React, { useState } from "react";
import PropTypes, { func } from "prop-types";

function useInputValue(defaultValue = "") {
	const [value, setValue] = useState(defaultValue);

	return {
		bind: {
			value: value,
			onChange: (e) => setValue(e.target.value),
		},
		clear: () => setValue(""),
		value: () => value,
	};
}

function AddTodo({ onCreate }) {
	const input = useInputValue("");

	function onSubHandler(e) {
		e.preventDefault();

		if (input.value().trim()) {
			onCreate(input.value());
			input.clear();
		}
	}

	return (
		<form style={{ marginBottom: "1rem" }} onSubmit={onSubHandler}>
			<input {...input.bind} />
			<button type="submit">Add todo</button>
		</form>
	);
}

AddTodo.propTypes = {
	onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
