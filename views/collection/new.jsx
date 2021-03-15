const React = require("react");
const Layout = require("../Layout.jsx");
const API = require("./APICall.jsx");
import Form from "./Form.jsx";

const New = () => {
	const searchGames = async () => {
		const res = await fetch("https://api.boardgameatlas.com/api/search?name=Catan&client_id=7icEeQwWLb");
		const data = await res.json();
		console.log(data);
	};

	return (
		<Layout title="New Game!">
			<h1>Add Your Game</h1>
			<Form name="name" />
		</Layout>
	);
};

export default New;

// class New extends React.Component {
// 	render() {
// 		return (
// 			<Layout title="New Game!">
// 				<h1> Add A New Game </h1>
// 				<form action="/collection/" method="post">
// 					<input type="text" placeholder="Game" name="game" />
// 					<input type="text" name="imageURL" placeholder="Image" />
// 					<input type="submit" value="Add Game" />
// 				</form>

// 				<h1>Search Games</h1>
// 				<API />
// 			</Layout>
// 		);
// 	}
// }

// module.exports = New;
