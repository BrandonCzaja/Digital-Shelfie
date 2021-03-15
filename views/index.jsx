const React = require("react");
const Layout = require("./Layout.jsx");

class Index extends React.Component {
	render() {
		return (
			<Layout title="Welcome Page">
				<h1 className="indexHeader"> {this.props.hello} </h1>
			</Layout>
		);
	}
}

module.exports = Index;

/*
Notes:
This page is the landing page


{this.props.hello} === Hello User, please login
I'm not sure where the greeting is coming in from though

*/
