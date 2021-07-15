import React from 'react';

function Card(props) {
    console.log(props)
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.img} alt={props.alt}/>
            <span>{props.date}</span>
            <p>{props.desc}</p>
        </div>
    );
}

export default Card;