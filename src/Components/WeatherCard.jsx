import React, { useEffect, useState } from 'react'
import {useDate} from '../Utilities/useDate';
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import windy from '../assets/icons/windy.png'
const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions
}) => {
  const [icon , setIcons] = useState(sun)
  const {time}=useDate();
  useEffect(()=>{
    if(iconString){
      if(iconString.toLowerCase().includes('cloud'))setIcons(cloud)
      if(iconString.toLowerCase().includes('rain'))setIcons(rain)
      if(iconString.toLowerCase().includes('clear'))setIcons(sun)
      if(iconString.toLowerCase().includes('thunder'))setIcons(storm)
      if(iconString.toLowerCase().includes('snow'))setIcons(snow)
      if(iconString.toLowerCase().includes('fog'))setIcons(fog)
      if(iconString.toLowerCase().includes('wind'))setIcons(windy)
    }
  },[iconString])
  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glasscard p-4'>
      <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4 '>
        <img src={icon} alt="ICON" />
        <p className='font-bold text-5xl flex justify-center items-center'>{temperature}&deg;C</p>
      </div>
      <div className='font-bold text-center text-xl'>
        {place}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2 '>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2 '>{time}</p>
      </div>
      <div className='w-full flex mt-4 justify-center gap-4 items-center'>
      <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <span className='font-normal'>{windspeed} km/h</span></p>
      <p className='flex-1 text-center p-2 font-bold bg-green-600 shadow rounded-lg'>Humidity<span className='font-normal'>{humidity} gm/m&#179;</span></p>     
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg '>Heat Index</p>
        <p className=' text-lg '>{heatIndex?heatIndex:'N/A'}</p>
      </div>
      <div className=' text-center'>
        <div className='w-full p-4 justify-center items-center text-3xl font-semibold'>
            {
              conditions
            }
        </div>
      </div>
    </div>
  )
}

export default WeatherCard