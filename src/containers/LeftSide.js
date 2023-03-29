import React, { useContext } from "react"
import './leftSide.css'
import { AppContext } from "./App"


function LeftSide(){
    const {
            isLoading,
            location,
            currentTime,
            currentWeatherSummary
            ,weatherIcon,
            currentTemperature,
            error,
            } = useContext(AppContext)
    return(
        <>
        <div className="spinner-loading-container" style={{display:isLoading?'block':'none'}}>
            <img src='icons/loading.png' alt='loading spinner' className="spinner"/>
            <p className="loading-text">Loading</p>
        </div>

        <div className="error-message-container" style={{visibility:error.theyIsError?'visible':'hidden'}}>
            <img src='icons/error.png' alt='error warning logo'/>
            <p className="error-text">Something went wrong! {error.errorMessage }</p>
        </div>

        <div className="weather-summary" style={{visibility:isLoading?'hidden' : 'visible'}}>
            <p className="temperature">{currentTemperature} &deg;</p>
            <h2 className="city-details">{location}<span className="small-text">{currentTime}</span></h2>
            <p className='icon-container'><img src={`icons/${weatherIcon}.png` } alt='weather icon' className='icon-current-weather'/>
                <span className="small-text">{currentWeatherSummary}</span>
            </p>
        </div>
        </>
    )
}

export default LeftSide

