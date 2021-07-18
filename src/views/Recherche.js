import '../App.css';
import React from 'react';
import { useRef, useState } from 'react';
import Card from '../components/Card';
import Loupe from '../assets/loupe.png';

function Recherche() {

    const inputRef = useRef();
    const [records, setRecords] = useState([]);

    function onValidateForm(event){
        event.preventDefault();

        const searchValue = inputRef.current.value;


        fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search='+searchValue)
        .then(res => res.json())
        .then(data => setRecords(data.records)) 
        
    }


    return (
        <div className="searchCustom">
            <h1>Recherchez un évènement</h1>

            <form onSubmit={onValidateForm}>
                <input type="text" placeholder="Que cherchez-vous ?" ref={inputRef} />
                <button type="submit"><img src={Loupe} alt="Loupe"/></button>
            </form>

            {records && <>
            {records.map((itemData, index) => (
                            <Card 
                                key={index}
                                id={itemData.record.id}
                                title={itemData.record.fields.title}
                                img={itemData.record.fields.cover.url}
                                alt={itemData.record.fields.cover_alt}
                                date={itemData.record.fields.date_start}
                                desc={itemData.record.fields.lead_text}
                            />
                        ))}
            </>}

            {records.length === 0 && (
                    <p>Aucun résultat</p>
                )}
        </div>
    );
}

export default Recherche;