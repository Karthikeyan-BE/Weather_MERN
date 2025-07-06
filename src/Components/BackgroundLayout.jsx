import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
import clear from '../assets/images/Clear.jpg'
import cloudy from '../assets/images/Cloudy.jpg'
import fog from '../assets/images/fog.png'
import rainy from '../assets/images/Rainy.jpg'
import snow from '../assets/images/snow.jpg'
import stormy from '../assets/images/Stormy.jpg'
import sunny from '../assets/images/Sunny.jpg'

const BackgroundLayout = () => {

  const {Weather} = useStateContext()
  
  const [image , setImage] =useState(clear)
  
  useEffect(()=>{
    if(Weather.conditions){
      let imageString = Weather.conditions
      if(imageString.toLowerCase().includes('clear')){setImage(clear)}
      if(imageString.toLowerCase().includes('cloud')){setImage(cloudy)}
      if(imageString.toLowerCase().includes('fog')){setImage(fog)}
      if(imageString.toLowerCase().includes('rain')||imageString.toLowerCase().includes('shower')){setImage(rainy)}
      if(imageString.toLowerCase().includes('sunny')){setImage(sunny)}
      if(imageString.toLowerCase().includes('snow')){setImage(snow)}
      if(imageString.toLowerCase().includes('thunder')||imageString.toLowerCase().includes('storm')){setImage(stormy)}
    }
  },[Weather])
  return (
   <img src={image} alt="Weather_Img" className='h-screen w-full fixed left-0 top-0 -z-10' />
  )
}

export default BackgroundLayout