import React, { useState, useEffect } from "react";
import './styles.css';
import HeaderButtons from "../HeaderButtons";


function SearchListingComponent() {
    const [dataLocal, setDataLocal] = useState([
        {"fields": {
            "Squad": "z01",
            "Hashtag": "jacarei",
            "Data": 230320222007
        }}
    ])

    async function getSearchs() {
        return await fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?filterByFormula="+encodeURI("({Squad} = 'z01')")+"&maxRecords=100&view=Grid%20view&squad=recScutTnMQeHuKFs", {
            headers: {
                Authorization: 'Bearer key2CwkHb0CKumjuM'
            }
        }).then(res => res.json());
    }

    useEffect (() => {
        getSearchs().then(response => {
            setDataLocal(response.records)
        });
    }, [])

    const item = dataLocal.map((item) => {
        let correctDate = JSON.stringify(item.fields.Data).slice(0,2) +'/'+ JSON.stringify(item.fields.Data).slice(2,4);
        let correctHour = JSON.stringify(item.fields.Data).slice(8,10) +':'+ JSON.stringify(item.fields.Data).slice(10,12);

        return <tr>
                <td className="td1">{item.fields.Hashtag}</td>
                <td>{correctDate}</td>
                <td>{correctHour}</td>
            </tr>
    }) 

    return <>
        <div className="searchListingContainer">
            <HeaderButtons/>
            <div className="table">
                <h2>Buscas realizadas</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Hashtag</th>
                            <th>Data</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item}
                    </tbody>
                </table> 
            </div>
        </div>
    </>
}

export default SearchListingComponent;