import React from 'react';
import { Button, Image, FormControl } from 'react-bootstrap';
import EditProfilePictures from './EditProfilePictures';
import './UserCard.css';
import robot from '../ressources/robot.svg';
import human from '../ressources/human.svg';
import reload from '../ressources/reload.png'

export default class UserCard extends React.Component{
    constructor(props) {
        super(props);

        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);

        this.state = {
            user: [],
            editing: false
        };
    }

    componentWillMount () {
        this.setState({
            user: this.props.user
        });
    }

    handleNameChange(e) {
        let tempUser = this.state.user;
        tempUser.name = e.target.value;
        this.setState({
            user : tempUser
        });
    }

    handleDescChange(e) {
        let tempUser = this.state.user;
        e.preventDefault();
        tempUser.profile.desc = e.target.value;
        this.setState({
            user : tempUser
        });
    }

    toggleEdit() {
        let edit = !this.state.editing;
        this.setState({
            editing: edit
        });
        this.props.toggleOverlay();
    }

    handleGenderChange() {
        let tempUser = this.state.user;
        tempUser.isHuman = !tempUser.isHuman;
        this.props.updateUser(this.state.user, tempUser);
    }

    handleImageChange() {
        let tempUser = this.state.user;
        tempUser.profile.img = 'https://lorempixel.com/400/200';
        this.setState({
            user: tempUser
        });
    }

    normalCard(user) {
        let gender = user.isHuman ? human : robot;
        return (
            <li className="outerCard">
                <div className='innerCard'>
                    <Button
                        className='edit-btn'
                        onClick={this.toggleEdit}>Edit</Button>
                    <Image
                        src={user.profile.img}
                        alt='top-picture'
                        responsive />
                    <Image
                        src={gender}
                        alt='profile-picture'
                        className='profilePic' />
                    <h2>{user.name}</h2>
                    <p>{user.profile.desc}</p>
                </div>
            </li>
        )
    }

    editingCard(user) {
        return (
            <li className="outerCard outerEditCard">
                <div className='innerCard editCard'>
                    <Image
                        src={reload}
                        alt='reload'
                        className='reload-btn'
                        onClick={this.handleImageChange} />
                    <Button
                        bsStyle='success'
                        className='edit-btn save-btn'
                        onClick={this.toggleEdit}>Save</Button>
                    <Image
                        src={user.profile.img}
                        alt='http://lorempixel.com/'
                        responsive />
                    <EditProfilePictures
                        isHuman={user.isHuman}
                        onChangeGender={this.handleGenderChange} />
                    <form>
                        <FormControl
                            type='text'
                            className='editName'
                            value={user.name}
                            onChange={this.handleNameChange} />
                        <FormControl
                            type='textarea'
                            className='editDesc'
                            value={user.profile.desc}
                            onChange={this.handleDescChange} />
                    </form>
                </div>
            </li>
        )
    }


    render() {
        let user = this.state.user;
        return (
            !this.state.editing ? this.normalCard(user) : this.editingCard(user)
        );
    }
}
