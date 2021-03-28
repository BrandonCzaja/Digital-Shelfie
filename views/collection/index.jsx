// This is the user homepage that shows their collection

const React = require("react");
const Layout = require("../Layout.jsx");

class Index extends React.Component {
	render() {
		const { games, index } = this.props;
		return (
			<Layout title="My Collection">
				<span>
					<h1> Your Games   </h1>
				</span>
				<a href="/collection/new">
					<button> New Game</button>
				</a>
				<div className="row">
					{games.map((game) => (
						<div className="container">
							<h2 key={index}>{game.game}</h2>
							<img className="gameImages" src={game.imageURL} />
							<form action={`/collection/${game._id}?_method=DELETE`} method="POST">
								<input type="submit" value="Delete" />
							</form>

							<form action={`/collection/edit/${game._id}`} method="GET">
								<input type="submit" value="Edit" />
							</form>
						</div>
					))}
				</div>
			</Layout>
		);
	}
}

module.exports = Index;
