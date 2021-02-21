const React = require("react");
const Layout = require("../layout.jsx");
// const Form = require("../collection/form");

class New extends React.Component {
    render() {
        // const searchTerm = `https://api.boardgameatlas.com/api/search?name=${name}&client_id=7icEeQwWLb`;

        // const handleChange = (event) => {};

        // const handleSubmit = (event) => {
        //     //   Ajax call
        // };

        return (
            <Layout title="New Game!">
                <h1> Add A New Game </h1>
                <form action="/collection/" method="post">
                    <input type="text" placeholder="Game" name="game" />
                    <input type="text" name="imageURL" placeholder="Image" />
                    <input type="submit" value="Add Game" />
                </form>

                <h1>Search Games</h1>
                {/* <Form /> */}
            </Layout>
        );
    }
}

module.exports = New;

// `https://api.boardgameatlas.com/api/search?name=${searchTerms}&client_id=7icEeQwWLb`

// API
// https://stackoverflow.com/questions/23427384/get-form-data-in-reactjs
