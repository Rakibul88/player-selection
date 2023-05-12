import React from 'react';
import './playerSec.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faList} from '@fortawesome/free-solid-svg-icons'


const PlayerSec = props => {

    const {name, image,gender, salary} = props.player;

    return (
        <div className='playerSecContainer'>
            <h4>{name}</h4>
            <img src={image} alt="" />
            <p><small>Gender: {gender}</small></p>
            <p>Salary: {salary}</p>
            <button onClick={() => props.handleClick(props.player)}><FontAwesomeIcon icon={faList} /> add to list</button>

        </div>
    );
};

export default PlayerSec;