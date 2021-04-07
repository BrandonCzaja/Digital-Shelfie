const React = require("react");
const Layout = require("../layout.jsx");

class Edit extends React.Component {
	render() {
		const { game } = this.props;
		return (
			<Layout title="Edit The Game">
				<h1> Edit Your Game </h1>
				<form action={`/collection/edit/${game._id}?_method=PUT`} method="post">
					<input type="text" value={game.game} placeholder="Game" name="game" />

					<input type="text" value={game.imageURL} name="imageURL" placeholder="Image" />
					<input type="submit" value="Edit Game" />
				</form>
				<br />
				<img className="editImage" src={game.imageURL} />
			</Layout>
		);
	}
}

module.exports = Edit;
