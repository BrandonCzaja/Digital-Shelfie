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
		<form onSubmit={handleSubmit}>
			<input type="text" name="name" value={formData.name} onChange={handleChange} />
			<input type="submit" value="submit" />
		</form>
	);
};

export default Form;

// class Form extends React.Component {
//     render() {
//         const [formData, setFormData] = React.useState();

//         const handleChange = (event) => {
//             setFormData({ ...formData, [event.target.name]: event.target.value });
//         };

//         const handleSubmit = (event) => {
//             event.preventDefault();
//             props.handleSubmit(formData);
//         };

//         return (
//             <>
//                 <form onSubmit={handleSubmit}>
//                     <label>Name:</label>
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} />
//                 </form>
//                 <input type="submit" value="Search" />
//             </>
//         );
//     }
// }

// module.exports = Form;
