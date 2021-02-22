import React from "react";

const fruits = ({ pageContext }) => {
	return (
		<div>
			<h1>{pageContext.name}</h1>
			<h3>Description</h3>
			<p>{pageContext.desc}</p>
		</div>
	);
};

export default fruits;
