const React = require('react')
const Layout = require('./Layout.jsx')

const Landing = (props) => {
	const greeting = props.hello;
	return (
		<Layout title="Welcome Page">
			<h1 className="indexHeader">Hello User, please sign up or login.</h1>
		</Layout>
	);
};

module.exports = Landing
