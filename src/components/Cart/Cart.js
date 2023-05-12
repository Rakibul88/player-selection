import React from 'react';
import './Cart.css';

const Cart = props => {

    const playerList = props.list;

    const totalSalary = playerList.reduce((totalSalary, player) => totalSalary + Number(player.salary), 0);

    return (

        <div>
            <h3>Player added: {playerList.length}</h3>

            <div className='addedPlayer'>
                <div className='playerInfoDiv'>
                    {
                        playerList.map(playerInfo => {
                            return (
                                <div className='playerInfo'>
                                    <p>{playerInfo.name}</p>
                                    <p><small>Salary: {playerInfo.salary}</small></p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='salaryContainer'>
                    <h4>Total Salary: {Number(totalSalary)}</h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;