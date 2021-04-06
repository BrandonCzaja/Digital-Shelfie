const React = require('react')

class Layout extends React.Component {
	render() {
		return ( 
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/css/style.css" />
				</head>
				<body>
					<header>
						<nav>
							<h2>
								<span>
									<a href="/auth/register">
										Register |</a>
								</span>
								<span>
									<a href="/auth/login"> Login |</a>
								</span>
								<span>
									<a href="/auth/logout"> Logout</a>
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