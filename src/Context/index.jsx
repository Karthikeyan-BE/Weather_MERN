import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const StateContextProvider =({children})=>{
    const [Weather , setWeather]=useState({})
    const [values , setValues]=useState([])
    const [place, setPlace]=useState('harur')
    const [thisLocation, setLocation]=useState('')

    const fetchWeather = async()=>{
        const options = {
            method:'GET',
            url:'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params:{
                aggregateHours:24,
                location:place,
                contentType:'json',
                unitGroup:'metric',
                shortColumnName:0,
                q:place
            },
            headers:{
                'x-rapidAPI-key':import.meta.env.VITE_API_KEY,
                'x-rapidAPI-Host':'visual-crossing-weather.p.rapidapi.com'
            }
        }
        
        try {
            const response = await axios.request(options)
            const thisData = Object.values(response.data.locations)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])
            
        } catch (error) {
            console.log(error);
            alert(error)
        }
    }
    useEffect(()=>{fetchWeather()},[place])
    return (
        <StateContext.Provider value={{
            Weather,
            setPlace,
            values,
            thisLocation
        }}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = ()=>{return useContext(StateContext)}


