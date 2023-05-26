
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './Services/weatherService';
import { useEffect, useState } from 'react';
import { UilSpinnerAlt } from '@iconscout/react-unicons'
function App() {

const [query,setQuery] =useState({q: 'berlin'})
const [units,setUnits] =useState('metric')
const [weather,setWeather]=useState(null)
const [isLoading,setIsLoading]=useState(false);

useEffect(()=>{
  const fetchWeather = async () => {
    setIsLoading(true);
 await getFormattedWeatherData({...query, units}).then((data) =>{
  setWeather(data);
  setIsLoading(false);
 })
    // console.log(data);
  }
  
  fetchWeather();
},[query,units]);

const formatBackground =()=>{
  if(!weather) return "from-cyan-700 to-blue-700"

  const threshold= units==='metric'? 25: 65;

  if(weather.temp<=threshold) return "from-cyan-700 to-blue-700"

  return "from-yellow-700 to-orange-700"
}

  return (
    <div className={`mx-auto max-w-screen-md mt-3 mb-5 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`} >
    <TopButtons setQuery={setQuery}/>
    <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

    {weather && !isLoading && <div>
      <TimeAndLocation weather={weather}/>
    <TemperatureAndDetails weather={weather}/>
    </div>}
    {isLoading && <div><span><UilSpinnerAlt size={50} /></span> <h1>Loading... </h1></div> }
  
    </div>
  );
}

export default App;
