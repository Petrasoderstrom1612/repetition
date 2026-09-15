import './assets/scss/App.scss'
// import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useState } from 'react'
import {getCurrentWeather} from "./services/OWMAPI"
import Forecast from './components/Forecast'
import type { CurrentWeather } from './services/OWMAPI.types'
import SearchCity from './components/SearchCity'
import "./services/OWMAPI"
import Loader from './components/Loader'
import WeatherIcon from './components/WeatherIcon'

function App() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather|null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string|false>(false)
  const [units, setUnits] = useState<"metric"|"imperial">("metric")
  const [city, setCity] = useState("")


  console.log(currentWeather)
  console.log(isLoading, error)

  const selectUnits = () => {
    const newUnits = units === "metric" ? "imperial" : "metric"
    setUnits(newUnits)
    handleSearch(city,units)
  }

  const handleSearch = async (city: string, units: string) => {
    setCity(city)
        try{
      setError(false)
      setIsLoading(true)
      console.log("Units", units)
      const data = await getCurrentWeather(city, units) //contact with API
      setCurrentWeather(data)
    } catch (err){
      if (err instanceof Error){
        setError(err.message)
      } else {
        setError("something unexpected happened")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
      <section id="app">
        <p>Switch to:</p>
        <Button onClick={selectUnits}>{units === "metric" ? "°C" : "F"}</Button>
        <hr/>
        <SearchCity onSearch={handleSearch} units={units}/>
        {isLoading && <Loader/>}
        {error && <Alert>The city you've been searching for does not exist. controll your spelling</Alert>}
        {!error && !isLoading && currentWeather && 
        <>
          <Forecast currentWeather={currentWeather} units={units}/>
          <WeatherIcon currentWeather={currentWeather}/>
        </>
        }
      </section>
  )
}

export default App