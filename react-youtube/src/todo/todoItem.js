import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todoN, i }) {
	return (
		<li>
			<strong>{i + 1}</strong>
			{todoN.title}
		</li>
	);
}

TodoItem.propTypes = {
	todoN: PropTypes.object.isRequired,
	i: PropTypes.number,
};

export default TodoItem;
