import { Card } from 'react-bootstrap';
import weather from "../assets/weather.jpg"

const Forecast = () => {
    return (
        <div id="current weather">
            <Card>
                <img src={weather} className="card-img-top" alt="daytime, nighttime,different weather conditions"/>
                <div className="card-body">
                    <h5 className="card-title" id="location">
                        <span id="city">CITY</span>, <span id="country">COUNTRY</span>
                    </h5>
                    <p className="temp">
                        <span id="temperature">TEMP</span>&deg;C
                    </p>
                    <p className="humidity">
                        <span id="humidity">HUMIDITY</span>% humidity
                    </p>
                    <p className="wind">
                        <span id="windspeed">WIND_SPEED</span>m/s
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default Forecast;