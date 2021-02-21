const React = require("react");

function API() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setitems] = useState([]);

    // Remember to remove API Key
    usEffect(() => {
        fetch("https://api.boardgameatlas.com/api/search?name=Catan&client_id=7icEeQwWLb")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setitems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return <p>{items.name}</p>
        <img src={items.images.thumb}
    }
}
