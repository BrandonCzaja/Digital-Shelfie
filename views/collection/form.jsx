import React, { useState } from "react";
import API from "./API.jsx";

// Remember, props are the attributes of the form
// The Form works with manual submission

const Form = (props) => {
	//////////////
	// Form State
	//////////////

	// Create form data (which is all of the games) and function to update data
	const [formData, setFormData] = useState({
		name: "",
	});

	// Track changes to the form's state
	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	// Handle the form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<>
			<API />
			<form onSubmit={handleSubmit} action="/collection/" method="post">
				<input type="text" name="game" value={formData.name} onChange={handleChange} placeholder="Game" />
				<input type="text" name="imageURL" placeholder="Image" onChange={handleChange} />
				<input type="submit" value="submit" />
			</form>
		</>
	);
};

export default Form;
