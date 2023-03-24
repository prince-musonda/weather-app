import React,{Fragment,useState} from "react";
import './citiesSection.css'

function CitiesSection(props){
    const citiesArray = props.cities.map(city =>{
        return <li>{city}</li>}
    )
    return(
        <section className="cities-section">
            <ul>
                {citiesArray}
            </ul>
        </section>
    )
}

export default CitiesSection