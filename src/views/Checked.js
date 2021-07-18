import React, {useEffect, useState} from 'react';
import Card from '../components/Card';

function Checked() {

    const [records, setRecords] = useState([]);

    useEffect(() => {

    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        const test = localStorage.getItem(localStorage.key(i));
        fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/'+test)
        .then((res) => res.json())
        .then((data) => setRecords(items => [...items, data.record]));
        }
    }, []);

    return (
        <div className="checkedCustom">
            <h2>Vos Favoris</h2>
            <div className="">
                {records.map((record, index) => (
                    <Card 
                        key={index}
                        id={record.id}
                        title={record.fields.title}
                        img={record.fields.cover.url}
                        alt={record.fields.cover_alt}
                        date={record.fields.date_start}
                        desc={record.fields.lead_text}
                    />
                ))}
                {records.length === 0 && (
                    <p>Aucun Favoris</p> 
                )}
            </div>
        </div>
    );
}

export default Checked;