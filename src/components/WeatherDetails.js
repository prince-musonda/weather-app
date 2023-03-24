import React,{Fragment} from "react";
import './weatherDetails.css'

function WeatherDetails(props){
    return(
        <>
        <p style={{color:'white',margin:'2rem 0'}}>Weather Details</p>
        <section className="weather-details-section">
            <ul className="weather-details">
                <li>Cloudy</li>
                <span className="values">{props.cloudyValue}</span>
                <li>Humidity</li>
                <span className="values">{props.humidityValue}</span>
                <li>wind</li>
                <span className="values">{props.windValue}</span>
            </ul>
        </section>
    </>
    )
}

export default WeatherDetails