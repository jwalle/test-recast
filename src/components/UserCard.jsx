import React from 'react';
import './UserCard.css';
import avatar from '../ressources/avatar.png';

export default class UserCard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            user: []
        };
    }

    render() {
        let user = this.props.user;
        return (
            <div className="outerCard">
                <div className='innerCard'>
                    <img src={user.profile.img} alt='Oups'/>
                    <img src={avatar} alt='Oups profil' id='profilePic'/>
                    <h2>{user.name}</h2>
                    <p>{user.profile.desc}</p>
                    <p>is human : {user.isHuman}</p>
                </div>
            </div>
        );
    }
}
