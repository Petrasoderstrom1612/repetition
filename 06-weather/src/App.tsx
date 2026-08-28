import './assets/scss/App.scss'
import CurrentWeather from './components/CurrentWeather'
import SearchCity from './components/SearchCity'
import "./services/OWMAPI"

function App() {

  return (
      <section id="app">
        <SearchCity/>
        <CurrentWeather/>
      </section>
  )
}

export default App