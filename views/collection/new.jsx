const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {games} = this.props;
    return (
      <Layout title="New Game!">
        <h1> Add A New Game </h1>
        <form action="/collection/" method='post'>
            <input type="text" placeholder='Game' name='game'/>
            <input type="text" name='imageURL' placeholder='Image'/>
            <input type="submit" value='Add Game'/>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
