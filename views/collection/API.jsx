import React, { useState } from "react";
const { KEY } = process.env;

// Resource: https://medium.com/@carlie.anglemire/search-bar-in-react-with-a-3rd-party-api-ced92c940236

// export default class API extends React.Component {
// 	state = {
// 		searchTerm: "",
// 	};

// 	handleChange = (e) => {
// 		this.setState({ [event.target.name]: event.target.value });
// 	};
// }

const API = () => {
	const url = `https://api.boardgameatlas.com/api/search?name=`;
	const key = `&client_id=${KEY}`;

	// const searchGames = async (input) => {
	// 	const res = await fetch(`https://api.boardgameatlas.com/api/search?name=${input}&client_id=7icEeQwWLb`);
	// 	const data = await res.json();
	// 	console.log(data);
	// };

	const [gameState, setGameState] = useState({
		baseUrl: url,
		game: "",
		key: key,
		searchUrl: "",
		imageUrl: "",
	});

	const handleChange = (e) => {
		setGameState({
			...gameState,
			[event.target.name]: event.target.value,
		});
		console.log(gameState);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(gameState);
		setGameState(
			{
				searchUrl: baseUrl + game + key,
			},
			() => {
				console.log(searchUrl);
				fetch(searchUrl)
					.then((response) => response.json())
					.then(
						(data) =>
							setGameState({
								game: data.games[0].name,
								imageUrl: data.games[0].image_url,
							}),
						(err) => console.log(err)
					);
			}
		);
	};

	return (
		<div>
			<form onSubmit={handleSubmit} action="/collection" method="post">
				<input type="text" name="game" value={gameState.name} onChange={handleChange} />
				<input type="submit" value="submit" />
			</form>
		</div>
	);
};

export default API;
