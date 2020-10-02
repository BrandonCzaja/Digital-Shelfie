const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>Board Game Collection</h1>
          </header>
          <main>{this.props.children}</main>
          <footer>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;