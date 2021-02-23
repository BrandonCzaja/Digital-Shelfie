const React = require("react");
const Layout = require("../layout.jsx");
const API = require("../../models/collection/apiCall");
// const Form = require("../collection/form");

class New extends React.Component {
    render() {
        return (
            <Layout title="New Game!">
                <h1> Add A New Game </h1>
                <form action="/collection/" method="post">
                    <input type="text" placeholder="Game" name="game" />
                    <input type="text" name="imageURL" placeholder="Image" />
                    <input type="submit" value="Add Game" />
                </form>

                <h1>Search Games</h1>
                <API />
            </Layout>
        );
    }
}

module.exports = New;
