import './assets/scss/App.scss'
import { useState, useEffect } from 'react'
import {getCurrentWeather} from "./services/OWMAPI"
import Forecast from './components/Forecast'
import type { CurrentWeather } from './services/OWMAPI.types'
import SearchCity from './components/SearchCity'
import "./services/OWMAPI"

function App() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather|null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string|false>(false)

  useEffect(()=>{
    const getData = async () => {
      try{
        setIsLoading(true)
        const data = await getCurrentWeather("Stockholm")
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
    getData()
  },[])

  console.log(currentWeather)
  console.log(isLoading, error)

  return (
      <section id="app">
        <SearchCity/>
        <Forecast currentWeather={currentWeather}/>
      </section>
  )
}

export default App