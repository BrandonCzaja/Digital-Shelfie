const React = require("react");
const Layout = require("../layout");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <h2>{this.props.greeting}</h2>
        <form action="/auth/login" method="post">
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="login" />
        </form>
      </Layout>
    );
  }
}

module.exports = Login;
