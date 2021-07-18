import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import hearth from '../assets/hearth.png';
import redHearth from '../assets/redHearth.png';
import moment from 'moment';
import 'moment-timezone';

function Card(props) {

    const id = props.id;
    const yo = localStorage.getItem(id);

    const currentDateTime = moment(props.date);

    const [isChecked, setIsChecked] = useState(false);

    const handleLike = (e) => {
        e.preventDefault();
    
        if(isChecked === false && id !== yo) {
            
          localStorage.setItem(id , id)
          setIsChecked(true)
        } else {
          localStorage.removeItem(id)
          setIsChecked(false)
        }
    
      }

    return (
        <Link to={"/evenement/"+props.id}>
            <div className="CardCustom">
                <div className="leftSideCard">
                    <img src={props.img} alt={props.alt}/>
                </div>
                <div className="rightSideCard">
                    <p>{moment(currentDateTime).format('Do MMMM YYYY, h:mm:ss a')}</p>
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                    
                    {isChecked ? (
                        <button onClick={e => handleLike(e)}>
                           <img src={redHearth} alt="redHearth"/>
                        </button>) 
                        : ( 
                        <button onClick={e => handleLike(e)}>
                             <img src={hearth} alt="hearth"/>
                        </button>)}

                </div>
               
            </div>
        </Link>
    );
}

export default Card;