import { Card } from 'react-bootstrap';
import weather from "../assets/weather.jpg"
import type { CurrentWeather } from '../services/OWMAPI.types'
import WeatherIcon from '../components/WeatherIcon'

interface ForecastProps {
    currentWeather: CurrentWeather;
    units: string;
}

const Forecast: React.FC<ForecastProps> = ({currentWeather, units}) => {
const recalculatedTemperature = units === "metric" ? currentWeather.main.temp : currentWeather.main.temp * 9/5 + 32

console.log("CUR",currentWeather)
    return (
        <div id="current weather">
            <Card>
                <img src={weather} className="card-img-top" alt="daytime, nighttime,different weather conditions"/>
                <div className="card-body">
                    <h5 className="card-title" id="location">
                        <span id="city">{currentWeather ? currentWeather.name : "CITY"}</span>, <span id="country">{currentWeather ? currentWeather.sys.country : "Country"}</span>
                    </h5>
                    <p className="temp">
                        <span id="temperature">{currentWeather ?  recalculatedTemperature.toFixed(1) : "TEMP"}</span>{units === "metric" ? "°C" : "F"}
                    </p>
                    <p className="humidity">
                        <span id="humidity">{currentWeather ? currentWeather.main.humidity : "HUMIDITY"}</span>% humidity
                    </p>
                    <p className="wind">
                        <span id="windspeed">{currentWeather ? currentWeather.wind.speed : "WIND_SPEED"}</span>m/s
                    </p>
                    <p>
                        <span>{currentWeather ? new Date(currentWeather.dt * 1000).toLocaleTimeString() : ""}</span>
                    </p>
                </div>
            <WeatherIcon currentWeather={currentWeather}/>               
            </Card>
        </div>
    )
}

export default Forecast;