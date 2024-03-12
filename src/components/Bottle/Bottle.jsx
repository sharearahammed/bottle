import React from 'react';
import './Bottle.css'

const Bottle = ({bottle , handleAddToCard}) => {
    const {name,img,price} = bottle;
    return (
        <div className='bottle'>
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <br />
            <button onClick={()=>{handleAddToCard(bottle)}}>Purchase</button>
        </div>
    );
};

export default Bottle;