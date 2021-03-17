/*

THIS IS FROM THE REACT DOCS CONDITIONAL RENDERING SECTION. THIS SHOULD WORK FOR A PROPER GREETING

```
    function UserGreeting(props){
        return <h1>Welcome back!</h1>
    }

    function GuestGreeting(props){
        return <h1>Please sign in.</h1>
    }
```

```
    function Greeting(props){
        const isLoggedIn = props.isLoggedIn;
        if(isLoggedIn){
            return <UserGreeting />
        }
        return <GuestGreeting />
    }

    ReactDOM.render(
        <Greeting isLoggedIn={false}>, document.getElementById('root')
    )
```

*/
