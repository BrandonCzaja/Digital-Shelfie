const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Welcome Page">
        <h1 className='indexHeader'> {this.props.hello} </h1>
      </Layout>
    );
  }
}

module.exports = Index;
