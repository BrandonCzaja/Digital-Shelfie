const React = require('react')
const Layout = require('./Layout.jsx')

class Landing extends React.Component{
	render() {
		return (
			<Layout title='Digital Shelfie'>
				<h1 className='indexHeader'>Hello User. Please sign up or login.</h1>
			</Layout>
		)
	}
}

module.exports = Landing



// const Landing = (props) => {
// 	const greeting = props.hello;
// 	return (
// 		<Layout title="Welcome Page">
// 			<h1 className="indexHeader">Hello User, please sign up or login.</h1>
// 		</Layout>
// 	);
// };

// module.exports = Landing
