import React from 'react';
import { useRef, useState } from 'react';
import Card from '../components/Card';

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
        <div>
            <h1>Page de recherche</h1>

            <form onSubmit={onValidateForm}>
                <input type="text" ref={inputRef} />
                <button type="submit">Rechercher</button>
            </form>

            {records && <>
            {records.map(itemData => (
                            <Card 
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
                    <p>error404</p>
                )}
        </div>
    );
}

export default Recherche;