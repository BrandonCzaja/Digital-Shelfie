import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./views/collection/Index.jsx";
import Landing from "./views/Landing.jsx";
import Layout from "./views/Layout.jsx";
const { KEY } = process.env;

const App = (props, handleChange) => {
	const url = `https://api.boardgameatlas.com/api/search?name=`;
	// const addedGame = `${(onChange = { handleChange })}`;

	const key = `&client_id=${KEY}`;

	const searchGames = async (input) => {
		const res = await fetch(`https://api.boardgameatlas.com/api/search?name=${input}&client_id=7icEeQwWLb`);
		const data = await res.json();
		console.log(data);
	};

	return (
		<Router>
			<Route path="/" exact component={Landing} />
			<Route path="/collection" exact component={Index} />
		</Router>
	);
};

export default App;
