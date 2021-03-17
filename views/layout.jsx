import React from "react";

class Layout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/css/style.css" />
					{/* <script src="/js/app.js"></script> */}
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

module.exports = Layout;

// THIS SHOULD HANDLE MY LOGIN BUTTON ISSUE. IT IS FROM REACT DOCS CONDITIONAL RENDERING

/*

class LoginControl extends React.Component{
        constructor(props){
            super(props)
            this.handleLoginClick = this.handleLoginClick.bind(this)
            this.handleLogoutClick = this.handleLogoutClick.bind(this)
            this.state = {isLoggedIn : false}
        }

        handleLoginClick(){this.setState({isLoggedIn : true})}

        handleLogoutClick(){this.setState({isLoggedIn : false})}

        render(){
            const isLoggedIn = this.state.isLoggedIn;
            let button;
            if(isLoggedIn){
                button = <LogoutButton onClick={this.handleLogoutClick}>
            } else{
                button = <LoginButton onClick={this.handleLoginClick}>
            }

            return(
                <div>
                    <Greeting isLoggedIn={isLoggedIn}/>
                    {button}
                </div>
            )
        }
    }

    ReactDOM.render(
        <LoginControl />,
        document.getElementById('root')
    )

*/
