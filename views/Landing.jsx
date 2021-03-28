const React = require('react')
const Layout = require('./Layout.jsx')


class Landing extends React.Component{
	
	render() {
		console.log('Hello from Landing')
		const greeting = this.props.hello
		return (
			<Layout title="Welcome Page">
			<h1 className="indexHeader">Hello</h1>
			</Layout>
		)
	}
}

// const Landing = (props) => {
// 	const greeting = props.hello;
// 	return (
// 		<Layout title="Welcome Page">
// 			<h1 className="indexHeader">{greeting}</h1>
// 		</Layout>
// 	);
// };

module.exports = Landing
/*
Notes:
This page is the landing page


{this.props.hello} === Hello User, please login
The 'Hello User, please login' is coming from server.js

*/
