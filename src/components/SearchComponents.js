import React,{Fragment,useState,useContext} from "react";
import { AppContext } from "../containers/App";

import './searchBox.css'
import './searchButton.css'

function SearchComponents(){
    const {fetchWeatherData} = useContext(AppContext)

    const [newLocation,setNewLocation] = useState('')
    function handleOnChange(e){
        console.log(e.target.value)
        setNewLocation(e.target.value)
    }

    return(<>
        <input onChange ={handleOnChange} type='search' placeholder="Another location" className="search-box"/>
        <button onClick= {()=>{console.log('clicked');fetchWeatherData(newLocation)}}><img src='icons/search-icon.png'/></button>
    </>)
}

export default SearchComponents