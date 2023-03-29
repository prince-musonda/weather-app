import React,{useState,useEffect} from "react";
import './app.css'
import RightSide from './RightSide'
import LeftSide from "./LeftSide";
import { createContext } from 'react';
import axios from 'axios';


export const AppContext = createContext();


function App(){
    //will be used to show a loading animation during data fetching
    const [isLoading,setIsLoading] = useState(false);
    // will be used to show a proper error message
    const [error,setError] = useState({theyIsError:false,errorMessage:''}) 
    const [location,setLocation] = useState('');
    const [currentTemperature,setCurrentTemperature] = useState('');
    const [relativeHumidity, setRelativeHumidity] = useState('')
    const [windSpeed, setWindSpeed] = useState('')
    const [cloudCover,setCloudCover] = useState('')
    const [cities,setCities] = useState([])
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [currentWeatherSummary,setCurrentWeatherSummary] = useState('')
    const [currentTime,setCurrentTime] = useState(null);

    async function getCoordinates(location){
        const res = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1`)
        const {longitude,latitude} =  res.data.results[0]
        return {longitude,latitude}
    }

    async function getLocationKey(location){
        // each location has a key based on the accuweather api that
        // we are using. so in order to get the curent weather conditions
        // we need to provide a Location key(i.e a number referencing a location).
        // And we can get this using longitude and latitude coordinates
        const {latitude,longitude} =  await getCoordinates(location);
        const locationObj = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=IsGqdtVFYNtGwkhp52AB9gtZRoEjzO17&q=${latitude}%2C${longitude}`);
        const locationKey = locationObj.data.Key
        return locationKey
    }

    async function getTimezone(location){
        // we getting the timzone of location
        // so that we can use it in displaying the current time
        // of a particular location
        const res = (await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1`))
        const {timezone} = res.data.results[0]
        return timezone
    }

    async function getCurrentDateTime(location){
        const timezone = await getTimezone(location);
        const res = await axios.get(`http://worldtimeapi.org/api/timezone/${timezone}`);
        const dateTimeObj = new Date(res.data.datetime);
        const hour = dateTimeObj.getHours()
        const minutes = dateTimeObj.getMinutes() 
        const day = dateTimeObj.getDate()
        const year = dateTimeObj.getYear() % 100 //get the last two numbers of current year
        const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const currentWeekDay = weekDays[dateTimeObj.getDay()] // 0 to 6
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        const currentMonth = months[dateTimeObj.getMonth()] // 0 to 11
        const currentDateTime = `${hour}:${minutes} - ${currentWeekDay},${day} ${currentMonth} '${year}` 
        return currentDateTime
    }

    async function fetchWeatherData(location){
        setError({theyIsError:false,errorMessage:''}) //hide any error message if any was shown before
        setIsLoading(true) // show spinner or loading animation
        
        try{
            //fetching current weather conditions of specified location key
            const locationKey = await getLocationKey(location)
            const currentTime = await getCurrentDateTime(location)
            const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=IsGqdtVFYNtGwkhp52AB9gtZRoEjzO17&details=true`);
            setIsLoading(false) // hide loading animation
            const weatherData = res.data[0]
            
            setLocation(location)      
            setCurrentTemperature(weatherData.Temperature.Metric.Value);
            setRelativeHumidity(weatherData.RelativeHumidity)
            setCloudCover(weatherData.CloudCover)
            setWeatherIcon(weatherData.WeatherIcon)
            setWindSpeed(weatherData.Wind.Speed.Metric.Value)
            setCurrentWeatherSummary(weatherData.WeatherText);
            setCurrentTime(currentTime)
            if(!cities.includes(location)){
                setCities([location,...cities])
            }
        }catch (error){
            setError({theyIsError:true,errorMessage:error.message}) // show error message
        }
        
       
    }

    useEffect(() => {
        fetchWeatherData('london')
    }, [])
   
    return(
        <>
        <AppContext.Provider value={{
            isLoading,
            error,
            fetchWeatherData,
            location,
            currentTemperature,
            relativeHumidity, 
            windSpeed,
            cloudCover,
            cities,setCities,
            weatherIcon,
            currentWeatherSummary,
            currentTime
        }}>
            <p className='backdrop'></p>
            <main style = {{background: 'url(backgrounds/rainy-day.jpg)'}}>
                <LeftSide/>
                <RightSide fetchData={fetchWeatherData}/>
            </main>
        </AppContext.Provider>
        </>
    )

}

export default App