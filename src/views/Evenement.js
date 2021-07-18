import React,{useEffect, useState}  from 'react';
import { useParams } from "react-router-dom";
import hearth from '../assets/hearth.png';
import redHearth from '../assets/redHearth.png';



function Evenement() {

    const params = useParams();

    const id = params.id;
    const yo = localStorage.getItem(id);

    const [records, setRecords] = useState(null);
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

    
    
    useEffect(() => {
        fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/'+id)
        .then(res => res.json())
        .then(data => {
            setRecords(data)
        }) 
    }, [id])
    
    return (

        <div className="eventCustom">
            {records &&
            <div className="contentEvent">
                <div className="topEvent">
                    <h1>{records.record.fields.title}</h1>
                    {isChecked ? (
                        <button onClick={e => handleLike(e)}>
                           <img src={redHearth} alt="redHearth"/>
                           <span>Enregistrer</span>
                        </button>) 
                        : ( 
                        <button onClick={e => handleLike(e)}>
                             <img src={hearth} alt="hearth"/>
                             <span>Enregistrer</span>
                        </button>)}
                </div>
                <div className="bottomEvent">
                    <img src={records.record.fields.cover.url} alt={records.record.fields.cover_alt} />
                    
                    {records.record.fields.description && (
                        <div>
                            <h2>Description</h2>
                            <p dangerouslySetInnerHTML={{
                                __html:records.record.fields.description
                            }}
                            ></p>
                        </div>
                    )}
                    {records.record.fields.date_description && (
                        <div>
                            <h2>Date</h2>
                            <p dangerouslySetInnerHTML={{
                                __html:records.record.fields.date_description
                            }}
                            ></p>
                        </div>
                    )}
                    <h2>Prix</h2>
                    <p>{records.record.fields.price_detail}</p>
                    <h2>Adresse</h2>
                    <p>
                        {records.record.fields.address_name}, 
                        {records.record.fields.address_street}
                        {records.record.fields.address_zipcode}, 
                        {records.record.fields.address_city}
                    </p>
                    <h2>Transport</h2>
                    <p>{records.record.fields.transport}</p>
                    <h2>Nom</h2>
                    <p>{records.record.fields.contact_name}</p>
                    <h2>Email</h2>
                    <p>{records.record.fields.contact_mail}</p>
                    <h2>Réseaux Sociaux</h2>
                    <p>{records.record.fields.contact_facebook}</p>
                    <p>{records.record.fields.contact_twitter}</p>
                    <h2>Adresse de contact</h2>
                    <p>{records.record.fields.contact_url}</p>
                </div>
            </div>
            }

        </div>
    );
}

export default Evenement;