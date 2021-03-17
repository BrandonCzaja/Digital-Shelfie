import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./views/collection/Index.jsx";
import Landing from "./views/Landing.jsx";
import Layout from "./views/Layout.jsx";
import API from "./views/collection/API.jsx";

const App = (props, handleChange) => {
	return (
		<Router>
			<Route path="/collection/new" component={API} />
			<Route path="/" exact component={Landing} />
			<Route path="/collection" exact component={Index} />
		</Router>
	);
};

export default App;
