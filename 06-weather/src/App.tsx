import './assets/App.scss'
import CurrentWeather from './components/CurrentWeather'
import SearchCity from './components/SearchCity'

function App() {

  return (
      <section id="app">
        <SearchCity/>
        <CurrentWeather/>
      </section>
  )
}

export default App