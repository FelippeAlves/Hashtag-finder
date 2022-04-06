import React, { useState, useEffect } from "react";
import './styles.css';
import HeaderButtons from "../HeaderButtons";
import HashLoader from "react-spinners/HashLoader";


function SearchListingComponent() {
    
    
    const [dataLocal, setDataLocal] = useState([
        {"fields": {
            "Squad": "z01",
            "Hashtag": "jacarei",
            "Data": 230320222007
        }}
    ])

    useEffect (() => {
        async function getSearchs() {
            const result = await fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?filterByFormula="+encodeURI("{Squad} = 'z01'")+"&maxRecords=100&view=Grid%20view&squad=recScutTnMQeHuKFs", {
                headers: {
                    Authorization: 'Bearer key2CwkHb0CKumjuM'
                }
            }).then(res => res.json())
            .then(response => 
                response
            );

            setDataLocal(result.records.reverse())
            setPages(Math.ceil(result.records.length / 10))         
        }
        setTimeout(() => {setLoading(false)}, 800);

        getSearchs()
    }, [])
    
    const [currentPage, setCurrentPage] = useState(0)
    const startIndex = currentPage * 10;
    const endIndex = startIndex + 10;
    const [pages, setPages] = useState(10)
    const [loading, setLoading] = useState(true)
    const currentItens = dataLocal.slice(startIndex, endIndex)

    const item = currentItens.map((item) => {
        const dateNow = new Date(item.fields.Data)
        const day = dateNow.getDate().toString().length < 2 ? '0' + dateNow.getDate() : dateNow.getDate()
        let month = dateNow.getMonth() + 1
        month = month.toString().length < 2 ? '0' + month : month
        const hours = dateNow.getHours().toString().length < 2 ? '0' + dateNow.getHours() : dateNow.getHours()
        const minutes = dateNow.getMinutes().toString().length < 2 ? '0' + dateNow.getMinutes() : dateNow.getMinutes()
        
        return <tr>
                <td className="td1">{item.fields.Hashtag}</td>
                <td>{day}/{month}</td>
                <td>{hours}:{minutes}</td>
            </tr>
    }) 

    return <>


        <div className="searchListingContainer">
            <HeaderButtons/>
            {
                loading ? 
                
                <div className="loaderContainer">
                    <HashLoader color="#fff" />
                    </div>
                    :
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
                    <ul>
                        <li>{Array.from(Array(pages), (item, index) => {
                            return <button className="pageButtons" value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index +1}</button>
                        })}</li>
                    </ul>
                </div>
            }
        </div>
    </>
}

export default SearchListingComponent;