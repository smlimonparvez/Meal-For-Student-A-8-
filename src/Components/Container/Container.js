import React, { useEffect, useState } from 'react';
import Asidebar from '../Asidebar/Asidebar';
import Card from '../Card/Card';
import './Container.css';

const Container = () => {
    const [cards, setCards] =  useState([]);
    useEffect(() =>{
        fetch('card.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    const handleAddToInput =(card)=>{
console.log('click')
    }

    return (
        <div className='container'>
            <div className='card-item'>
                <h2>MEAL FOR STUDENT</h2>
                <h3>Today's Meal Chart:</h3>
               <div className='card-container'>
               {
                    cards.map(card => <Card key={card.id}
                        card = {card}
                        handleAddToInput = {handleAddToInput}
                    ></Card>)
                }
               </div>
            </div>
            <div className='aside-bar'>
                <Asidebar></Asidebar>
            </div>
        </div>
    );
};

export default Container;