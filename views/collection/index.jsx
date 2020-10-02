const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {games, index} = this.props;
    return (
      <Layout title="My Collection!">
        <h1> Your Games </h1>
       <a href="/collection/new"><button> New Game</button></a>
       {/* The <h2> might have to be games.games if it doesn't show up  */}
        {games.map(games => <h2 key={index}>{games.games}</h2>)}
      </Layout>
    );
  }
}

module.exports = Index;
