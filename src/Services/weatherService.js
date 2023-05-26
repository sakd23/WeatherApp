import { DateTime } from "luxon";

const API_KEY="7d7f8187fc993061f9f7a164bce334d1";
const BASE_URL="https://api.openweathermap.org/data/2.5";

const getWeatherData=(infoType, searchParams)=>{
const url= new URL(BASE_URL + '/' + infoType);
url.search=new URLSearchParams({...searchParams, appid: API_KEY});

return fetch(url).then((res => res.json())).catch(err=>console.log('a'))
};

const formatCurrentWeather = (data)=>{
    const {
         coord: {lat,lon},
         main:{temp,feels_like,temp_min,temp_max,humidity},
         name,
         dt,
         sys: {country,sunrise,sunset},
         weather,
         timezone,
         wind: {speed}
          }=data
          const {main:details, icon}= weather[0]
      return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,weather,speed,details,icon,timezone}

}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather= await getWeatherData('weather',searchParams).then(formatCurrentWeather).catch(err=>console.error())
    return formattedCurrentWeather
}

const formatToLocalTime = (
    secs,
    zone,
    format= "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode= (code) => `https://openweathermap.org/img/wn/${code}@2x.png`

export default  getFormattedWeatherData;
export {formatToLocalTime, iconUrlFromCode};