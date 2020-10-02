const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {games} = this.props;
    return (
      <Layout title="My Collection!">
        <h1> My Notes </h1>
        {games.map(game => <h2>{game.game}</h2>)}
      </Layout>
    );
  }
}

module.exports = Index;
