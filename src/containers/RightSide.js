import React from 'react'
import './rightSide.css'
import CitiesSection from '../components/CitiesSection'
import WeatherDetails from '../components/WeatherDetails'
import SearchComponents from '../components/SearchComponents'

function RightSide(){

    return(
        <div className='main-container'>
            <section className='top-right'>
                <SearchComponents/>
            </section>
                <CitiesSection/>
          
            <WeatherDetails/>
        </div>
    )
}

export default RightSide