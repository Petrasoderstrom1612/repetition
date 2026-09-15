import { type CurrentWeather } from "../services/OWMAPI.types"

interface WeatherIconProps {
    currentWeather: CurrentWeather
}

const WeatherIcon: React.FC<WeatherIconProps> = ({currentWeather}) => {
   console.log("ICON",currentWeather.weather)

   const icons = currentWeather.weather.map(oneIcon => 
    <img src={`https://openweathermap.org/payload/api/media/file/${oneIcon.icon}`} alt={oneIcon.description}/>
   )

    return (
        <div>{icons}</div>
    )
}

export default WeatherIcon;