import React,{Fragment,useContext,useState} from "react";
import { AppContext } from "../containers/App";
import './citiesSection.css'

function CitiesSection(){
    const {cities} = useContext(AppContext) 
    const citiesArray = cities.map((city,index) =>{
        return <li key={city+index}>{city}</li>}
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