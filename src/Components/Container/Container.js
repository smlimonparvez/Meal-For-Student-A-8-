import React, { useEffect, useState } from 'react';
import Asidebar from '../Asidebar/Asidebar';
import Card from '../Card/Card';
import './Container.css';
import image from '../../images/food.png';

const Container = () => {
    const [cards, setCards] = useState([]);
    const [card1, setCard1] = useState([]);

    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    const handleAddToInput = (card) => {
        // console.log(card);
        const newCard = [...card1, card];
        setCard1(newCard);
    }

    return (
        <div className='container'>
            <div className='card-item'>
                <div className='org-name'>
                <img className='food-png' src={image} alt="" />
                <h2>MEAL FOR STUDENT</h2>
                </div>
                <h3>Today's Meal Chart:</h3>
                <div className='card-container'>
                    {
                        cards.map(card => <Card key={card.id}
                            card={card}
                            handleAddToInput={handleAddToInput}
                        ></Card>)
                    }
                </div>
            </div>
            <div className='aside-bar'>
                <Asidebar card1={card1}></Asidebar>
            </div>
        </div>
    );
};

export default Container;