import React,{Fragment,useContext} from "react";
import { AppContext } from "../containers/App";
import './weatherDetails.css'

function WeatherDetails(){
    const {windSpeed,relativeHumidity,cloudCover} = useContext(AppContext)
    return(
        <>
        <p style={{color:'white',margin:'2rem 0'}}>Weather Details</p>
        <section className="weather-details-section">
            <ul className="weather-details">
                <li>Cloud Cover</li>
                <span className="values">{ cloudCover && `${cloudCover}%` }</span>
                <li>Relative Humidity</li>
                <span className="values">{ relativeHumidity && `${cloudCover}%` }</span>
                <li>Wind Speed</li>
                <span className="values">{ windSpeed && `${cloudCover}%` }</span>
            </ul>
        </section>
    </>
    )
}

export default WeatherDetails