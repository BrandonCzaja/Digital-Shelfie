const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {games} = this.props;
    return (
      <Layout title="My Collection!">
        <h1> My Games </h1>
        <a href="/collection/new"><button>New Game</button></a>
        {games.map(games => <h2>{games}</h2>)}
        {console.log(`Games : ${games}`)}
      </Layout>
    );
  }
}

module.exports = Index;
