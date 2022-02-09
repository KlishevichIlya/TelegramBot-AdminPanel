import './App.css';
import React, {Component} from "react";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            searchField: ""
        }
    }

    componentDidMount() {
        const uriBase = process.env.NODE_ENV === 'development'
            ? 'https://localhost:44382/api/user'
            : 'prodUri';
        fetch(uriBase)
            .then(response => response.json())
            .then(users => this.setState({users: users}));
    }

    handleChange = e => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const { users, searchField } = this.state;
        searchField.toLowerCase()
        const filteredUsers = users.filter(user =>
            user.userName.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>TgBot Admin Panel</h1>
                <SearchBox
                    placeholder="Find users"
                    handleChange={this.handleChange}
                />
                <CardList users={filteredUsers} />
            </div>
        );
    }
}

export default App;
