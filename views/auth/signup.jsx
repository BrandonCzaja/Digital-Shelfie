const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Register">
        <h2>Register</h2>
        <form action="/auth/signup" method="post">
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="Register" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
