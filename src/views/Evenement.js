import React,{useEffect, useState}  from 'react';
import { useParams } from "react-router-dom";


function Evenement() {

    const params = useParams();
    const id = params.id;

    const [records, setRecords] = useState(null);
    
    
    useEffect(() => {
        fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/'+id)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRecords(data)
        }) 
    }, [id])
    
    return (

        <div>
            {records &&
            <div>
                    <h1>{records.record.fields.title}</h1>
                    <img src={records.record.fields.cover.url} alt={records.record.fields.cover_alt} />
                    <p>{records.record.fields.description}</p>
                    <p>{records.record.fields.date_description}</p>
                    <p>{records.record.fields.price_detail}</p>
                    <p>
                        {records.record.fields.address_name}, 
                        {records.record.fields.address_street}
                        {records.record.fields.address_zipcode}, 
                        {records.record.fields.address_city}
                    </p>
                    <p>{records.record.fields.transport}</p>
                    <p>{records.record.fields.contact_name}</p>
                    <p>{records.record.fields.contact_mail}</p>
                    <p>{records.record.fields.contact_facebook}</p>
                    <p>{records.record.fields.contact_twitter}</p>
                    <p>{records.record.fields.contact_url}</p>
            </div>
            }

        </div>
    );
}

export default Evenement;