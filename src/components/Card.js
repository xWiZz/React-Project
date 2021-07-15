import React from 'react';
import {Link} from 'react-router-dom';

function Card(props) {
    return (
        <Link to={"/evenement/"+props.id}>
            <div>
                <h2>{props.title}</h2>
                <img src={props.img} alt={props.alt}/>
                <span>{props.date}</span>
                <p>{props.desc}</p>
            </div>
        </Link>
    );
}

export default Card;