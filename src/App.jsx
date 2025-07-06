import { useState } from "react"
import search from '../src/assets/icons/search.svg'
import { useStateContext } from "./Context";
import BackgroundLayout from "./Components/BackgroundLayout";
import WeatherCard from "./Components/WeatherCard";
import MiniCard from "./Components/MiniCard";

function App() {
 
    const [input,setInput]=useState("")
      const {Weather , thisLocation ,values , setPlace} = useStateContext();

      const SubmitCity =()=>{
        setPlace(input);
        setInput('')
      }
      
  return (
    <>
      <div className="w-full h-screen text-white px-8">
        <nav className="w-full p-3 flex justify-center items-center">
          <h1 className="font-bold tracking-wide text-3xl"> Weather App</h1>
          <div className="bg-white w-[15rem] shadow-2xl overflow-hidden rounded flex items-center p-2 gap-2">
            <img src={search} alt="Search" className="w-[1.5rem] h-[1.5rem]"/>
            <input onKeyUp={(e)=>{
              if(e.key=== 'Enter')
              {
                SubmitCity();
              }
            }} type="text" placeholder={'Search City'}className="focus:outline-none w-full text-gray-800 text-lg" value={input} onChange={(e)=>setInput(e.target.value)}/>
          </div>
        </nav>
        <BackgroundLayout />
        <div className="w-full flex flex-wrap gap-8 py-8 px-[10%] items-center justify-center">
              <div>
              < WeatherCard 
              place={thisLocation}
              windspeed={Weather.wspd}
              humidity={Weather.humidity}
              temperature={Weather.temp}
              heatIndex={Weather.heatindex}
              iconString={Weather.conditions}
              conditions={Weather.conditions}
              />
              </div>
              <div className="flex justify-center gap-8 flex-wrap w-[60%]">
                {
                    values?.slice(1,7).map((ele) => {
                      return (<MiniCard 
                    key={ele.datetime}
                    time={ele.datetime}
                    temp={ele.temp}
                    iconString={ele.conditions}
                    />)
                  })
                }
              </div>
        </div>
      </div>
    </>
  )
}

export default App
