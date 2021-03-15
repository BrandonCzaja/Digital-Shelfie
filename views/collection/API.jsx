const API = () => {
	const searchGames = async () => {
		const res = await fetch("https://api.boardgameatlas.com/api/search?name=Catan&client_id=7icEeQwWLb");
		const data = await res.json();
		console.log(data);
	};
	return (
		<>
			<API />
		</>
	);
};

export default API;
