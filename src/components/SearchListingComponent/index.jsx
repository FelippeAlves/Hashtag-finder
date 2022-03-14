import React from "react";
import './styles.css';
import HeaderButtons from "../HeaderButtons";


function SearchListingComponent() {
    return <>
        <div className="searchListingContainer">
            <HeaderButtons/>
            <div>
                <h2>Buscas Realizadas</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Hastag</th>
                            <th>Data</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td1">#hastagname</td>
                            <td>25/02</td>
                            <td>09:30</td>
                        </tr>
                        <tr>
                            <td className="td1">#hastagname</td>
                            <td>25/02</td>
                            <td>09:30</td>
                        </tr>
                        <tr>
                            <td className="td1">#hastagname</td>
                            <td>25/02</td>
                            <td>09:30</td>
                        </tr>
                        <tr>
                            <td className="td1">#hastagname</td>
                            <td>25/02</td>
                            <td>09:30</td>
                        </tr>
                        <tr>
                            <td className="td1">#hastagname</td>
                            <td>25/02</td>
                            <td>09:30</td>
                        </tr>
                        <tr>
                            <td className="td1">#hastagname</td>
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