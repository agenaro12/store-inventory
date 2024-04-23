//import React from 'react';
import ClassModule from './Card.module.css';

const Card = (props) => {
    
    return (<div className={ClassModule.card}>
        <h2>{props.title}</h2>
        <h3>{props.children}</h3>
    </div>);
}

export default Card;