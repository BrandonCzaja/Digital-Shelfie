const React = require('react')

class Layout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/css/style.css" />
					<script src="/js/app.js"></script> {/*Not sure if this is actually needed, Added it from commit 1ed1f765169b9bb8e8a9949547fce939036195cb  */}
				</head>
				<body>
					<header>
						<h1>Digital Shelfie</h1>
						<nav>
							<h2>
								<span>
									<a href="/auth/signup">| Sign Up |</a>
								</span>
								<span>
									<a href="/auth/login"> Login |</a>
								</span>
								<span>
									<a href="/auth/logout"> Logout |</a>
								</span>
								<span>
									<a href="/collection"> Home |</a>
								</span>
							</h2>
						</nav>
					</header>
					<main>{this.props.children}</main>
					<footer></footer>
				</body>
			</html>
		);
	}
}

module.exports = Layout