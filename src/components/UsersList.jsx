import React from 'react';
import UserCard from "./UserCard";
import {users} from '../ressources/list.js';
import './UsersList.css';

export default class UsersList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            users,
            humanCount: 0,
            showOverlay: false
        };
        this.updateUser = this.updateUser.bind(this);
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.countingHumans = this.countingHumans.bind(this);
    }

    componentWillMount() {
        this.countingHumans();
    }

    toggleOverlay() {
        this.setState({
           showOverlay: !this.state.showOverlay
        });
    }

    countingHumans() {
        let humanCount = 0;
        for (let user of this.state.users) {
            humanCount += user.isHuman;
        }
        this.setState({
            humanCount
        });
    }

    updateUser(oldUser, newUser) {
        let newUsers = this.state.users;
        for(let user of newUsers) {
            if (user === oldUser) {
                user = newUser;
            }
        }
        this.setState({
            users: newUsers
        });
        this.countingHumans();
    }

    render() {
        let that = this;
        let listUsers = this.state.users.map(function (user, index) {
            return (
                <UserCard
                    user={user}
                    key={index}
                    toggleOverlay={that.toggleOverlay}
                    updateUser={that.updateUser} />
            )
        });

        return (
            <div className='count-list'>
                <div className="human-count">
                    <p>There is </p>
                    <h1>{this.state.humanCount}</h1>
                    <p>human here right now !</p>
                </div>
                <ul className='listUsers'>
                    {listUsers}
                    {this.state.showOverlay ? <div id="fadeOverlay"/> : ''}
                </ul>
            </div>
        );
    }
}
