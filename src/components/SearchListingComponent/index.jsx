import React from "react";
import './styles.css';
import HeaderButtons from "../HeaderButtons";
import { useSearchParams } from "react-router-dom";


function SearchListingComponent() {

    const [searchParams] = useSearchParams();

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
                        <tr>
                            <td className="td1">#{searchParams.get('search')}</td>
                            <td>25/02</td>
                            <td>09:30</td>
                        </tr>
                        <tr>
                            <td className="td1">#{searchParams.get('search')}</td>
                            <td>25/02</td>
                            <td>09:30</td>
                        </tr>
                        <tr>
                            <td className="td1">#{searchParams.get('search')}</td>
                            <td>25/02</td>
                            <td>09:30</td>
                        </tr>
                        <tr>
                            <td className="td1">#{searchParams.get('search')}</td>
                            <td>25/02</td>
                            <td>09:30</td>
                        </tr>
                        <tr>
                            <td className="td1">#{searchParams.get('search')}</td>
                            <td>25/02</td>
                            <td>09:30</td>
                        </tr>
                        <tr>
                            <td className="td1">#{searchParams.get('search')}</td>
                            <td>25/02</td>
                            <td>09:30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default SearchListingComponent;