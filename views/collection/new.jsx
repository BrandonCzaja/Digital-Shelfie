const React = require("react");
const Layout = require("../Layout.jsx");
import Form from "./Form.jsx";

const New = () => {
	return (
		<Layout title="New Game">
			<h1>Add Your Game</h1>
			<Form />
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
