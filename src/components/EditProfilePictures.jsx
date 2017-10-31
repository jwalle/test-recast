import React from 'react';
import { Image } from 'react-bootstrap';
import './UserCard.css';
import robot from '../ressources/robot.svg';
import human from '../ressources/human.svg';


export default class EditProfilePictures extends React.Component {
    handleClick(newGender) {
        let gender = this.props.isHuman ? 'human' : 'robot';
        if (gender !== newGender)
            this.props.onChangeGender();
    }

    render() {
        let gender = this.props.isHuman ? human : robot;
        return (
            <div className="chooseGender">
                <Image
                    src={human}
                    alt='human'
                    className={'profilePic ' + (gender !== human ? 'desaturate' : '')}
                    onClick={() => this.handleClick('human')} />
                <Image
                    src={robot}
                    alt='robot'
                    className={'profilePic ' + (gender !== robot ? 'desaturate' : '')}
                    onClick={() => this.handleClick('robot')} />
            </div>
        );
    }
}