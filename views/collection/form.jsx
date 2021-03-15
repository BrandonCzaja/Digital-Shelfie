import React, { useState } from "react";

// Remember, props are the attributes of the form

const Form = (props) => {
	const [formData, setFormData] = useState({
		name: "",
	});

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<form onSubmit={handleSubmit} action="/collection/" method="post">
			<input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Game" />
			<input type="submit" value="submit" />
		</form>
	);
};

export default Form;
