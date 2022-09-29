import React from 'react';
import './Card.css';

const Card = (props) => {
    const {img, title, info, age, time_required} = props.card
    return (
        <div className='card'>
           <div className='img'>
           <img src={img} alt="" />
           </div>
           <div className='info'>
           <h2>{title}</h2>
            <p>{info}</p>
            <h4>For Age: {age}</h4>
            <h4>Break Time: {time_required} min</h4>
           </div>
           <button className='btn'><p>ADD TO LIST</p></button>
        </div>
    );
};

export default Card;