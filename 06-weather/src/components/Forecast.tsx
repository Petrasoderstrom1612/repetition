import { Card } from 'react-bootstrap';
import weather from "../assets/weather.jpg"
import type { CurrentWeather } from '../services/OWMAPI.types'

interface ForecastProps {
    currentWeather: CurrentWeather | null
}

const Forecast: React.FC<ForecastProps> = ({currentWeather}) => {
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
                        <span id="temperature">{currentWeather ? currentWeather.main.temp : "TEMP"}</span>&deg;C
                    </p>
                    <p className="humidity">
                        <span id="humidity">{currentWeather ? currentWeather.main.humidity : "HUMIDITY"}</span>% humidity
                    </p>
                    <p className="wind">
                        <span id="windspeed">{currentWeather ? currentWeather.wind.speed : "WIND_SPEED"}</span>m/s
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default Forecast;