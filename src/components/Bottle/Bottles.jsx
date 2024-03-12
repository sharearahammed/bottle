import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import './Bottles.css'

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    const handleAddToCard = bottle => {
        console.log('bottle going to be added')
        console.log(bottle)
        const newCart = [...cart ,bottle]
        setCart(newCart)
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
            <div className='bottles-container'>
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCard={handleAddToCard}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;