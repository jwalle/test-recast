import React from 'react';
import UserCard from "./UserCard";
import {users} from '../ressources/list.js';
import './UsersList.css';

export default class UsersList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentWillMount() {
        this.setState({
            users
        })
    }

    render() {
        var listUsers = this.state.users.map(function (user, index) {
            return (
                <UserCard user={user} key={index}/>
            )
        });

        return (
            <div className='listUsers'>
                {listUsers}
            </div>
        );
    }
}
