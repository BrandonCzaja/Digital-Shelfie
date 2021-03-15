import React from "react";
import Layout from "./Layout.jsx";

const Landing = (props) => {
	const greeting = props.hello;
	return (
		<Layout title="Welcome Page">
			<h1 className="indexHeader">{greeting}</h1>
		</Layout>
	);
};

export default Landing;

/*
Notes:
This page is the landing page


{this.props.hello} === Hello User, please login
The 'Hello User, please login' is coming from server.js

*/
