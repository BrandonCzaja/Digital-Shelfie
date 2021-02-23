import React, { Component } from "react";

class API extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch("https://api.boardgameatlas.com/api/search?name=Catan&client_id=7icEeQwWLb")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            });
    }

    render() {
        let { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return <div className="API">Data loaded</div>;
        }
    }
}

export default API;
