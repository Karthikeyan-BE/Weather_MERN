import React, { useEffect, useState } from 'react'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import windy from '../assets/icons/windy.png'
import overcast from '../assets/icons/overcast.jpg'

const MiniCard = ({
  time,
  temp,
  iconString
}) => {
  
  const [icon , setIcons] = useState(sun);
  useEffect(()=>{
     if(iconString){
          if(iconString.toLowerCase().includes('cloud'))setIcons(cloud)
          if(iconString.toLowerCase().includes('rain'))setIcons(rain)
          if(iconString.toLowerCase().includes('clear'))setIcons(sun)
          if(iconString.toLowerCase().includes('thunder'))setIcons(storm)
          if(iconString.toLowerCase().includes('snow'))setIcons(snow)
          if(iconString.toLowerCase().includes('fog'))setIcons(fog)
          if(iconString.toLowerCase().includes('wind'))setIcons(windy)
          // if(iconString.toLowerCase().includes('overcast'))setIcons(overcast)
        }
  },[iconString])
  return (
      <div className='glasscard w-[10rem] h-[10rem] p-4 flex flex-col '>
          <p className='text-center'>
            {new Date(time).toLocaleTimeString('en',{weekday:'long'}).split("")[0]}
          </p>
          <hr />
          <div className='w-full flex justify-center  items-center'>
            <img src={icon} alt="icon" className='w-[4rem] h-[4rem]' />

          </div>
          <p className='text-center font-bold'>{temp}&deg;C</p>
      </div>
  )
}

export default MiniCard