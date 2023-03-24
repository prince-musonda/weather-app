import React from 'react'
import './rightSide.css'
import SearchBox from '../components/SearchBox'
import SearchButton from '../components/SearchButton'
import CitiesSection from '../components/CitiesSection'
import WeatherDetails from '../components/WeatherDetails'

function RightSide(){
    const cities = ['Birmingham','Manchester','New York','California']
    
    return(
        <div className='main-container'>
            <section className='top-right'>
                <SearchBox className='search-box'/>
                <SearchButton className='search-box'/>
            </section>
                <CitiesSection cities={['Birmingham','Manchester','New York','California']}/>
          
            <WeatherDetails humidityValue = '30mm' cloudyValue = '10%' windValue = '10km/h'/>
        </div>
    )
}

export default RightSide