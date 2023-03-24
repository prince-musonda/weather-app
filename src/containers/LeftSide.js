import React from "react"
import './leftSide.css'


function LeftSide(){
    return(
        <div className="weather-summary">
            <p className="temperature">08 &deg;</p>
            <p className="city-details">London <span className="small-text">12:54 - sunday,6 Oct 19</span></p>
            <p><img src={`icons/heavy-rain.png`} className='icon-current-weather'/>
                <span className="small-text">Rainy</span>
            </p>
        </div>
    )
}

export default LeftSide

