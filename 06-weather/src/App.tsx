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


function App() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather|null>(null) //null is falsy and helps us with displaying data in jsx
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string|false>(false) //to either check truthfulness === false or give it your own message or use axios error.message
  const [units, setUnits] = useState<"metric"|"imperial">("metric")
  const [city, setCity] = useState("")


  console.log(currentWeather)
  console.log(isLoading, error)

  const selectUnits = () => {
    const newUnits = units === "metric" ? "imperial" : "metric"
    setUnits(newUnits)
    if(city){
      handleSearch(city,newUnits)
    }
  }

  const handleSearch = async (city: string, units: string) => {
    setCurrentWeather(null)
    setError(false)
    setIsLoading(true)
    setCity(city)

    try{
      console.log("Units", units)
      const data = await getCurrentWeather(city, units) //contact with API
      setCurrentWeather(data)
    } catch (err){
      if (err instanceof Error){ //class Error has .message and other properties on it
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
        <Button onClick={selectUnits}>{units === "metric" ? "°C" : "Fh"}</Button>
        <hr/>
        <SearchCity onSearch={handleSearch} units={units}/>
        {isLoading && <Loader/>}
        {error && <Alert variant="danger">{error}</Alert>}
        {!error && !isLoading && currentWeather && 
          <Forecast currentWeather={currentWeather} units={units}/>
        }
      </section>
  )
}

export default App