import { Image } from "react-bootstrap"
import { type CurrentWeather } from "../services/OWMAPI.types"

interface WeatherIconProps {
    currentWeather: CurrentWeather
}

const WeatherIcon: React.FC<WeatherIconProps> = ({currentWeather}) => {
   console.log("ICON",currentWeather.weather)

   const icons = currentWeather.weather.map(oneIcon => 
    <div key={oneIcon.id} className="icon-div">
    <Image fluid src={`https://openweathermap.org/img/wn/${oneIcon.icon}@2x.png`} alt={oneIcon.description} title={oneIcon.description}/>
    <span className="condition-description">{oneIcon.description}</span>
    </div>
   )

    return (
        <div>{icons}</div>
    )
}

export default WeatherIcon;