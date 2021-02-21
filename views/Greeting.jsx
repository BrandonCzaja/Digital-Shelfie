import React from "react";
import ReactDom from "react-dom";

const UserGreeting = (props) => {
    return <h1>Welcome back {username}</h1>;
};
const NewUserGreeting = (props) => {
    return <h1>Hello! Please sign up</h1>;
};

export const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <NewUserGreeting />;
};

export default Greeting;
