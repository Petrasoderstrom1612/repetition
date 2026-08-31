import axios from "axios";
import type {CurrentWeather} from "./OWMAPI.types"

// const BASE_URL = "https://api.openweathermap.org/data/2.5";
//https://api.openweathermap.org/data/2.5/weather?q={london}&appid={93b8dc43f170a358bd8821511c0edff5}
const FAKE_SLOW_API = true;
const FAKE_SLOW_API_DELAY = 2000;

const API_KEY = import.meta.env.VITE_OWN_APIKEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5"

/* Get current weather conditions for a city with a slow API 
*  @param city City name
*  @return Current weather conditions
*/

export const getCurrentWeather = async (city: string) => {
    const res = await axios.get<CurrentWeather>(BASE_URL + "/weather",
        { params: {
            q: city,
            units: "metric",
            appid: API_KEY,
        },}
    )
        // ?q=${city}&units=metric&appid=${API_KEY}`)

    if (FAKE_SLOW_API) {
        await new Promise((r) => setTimeout(r, FAKE_SLOW_API_DELAY))
    }
    // console.log(city)

    return res.data;
}

// const weather = await getCurrentWeather("Stockholm");
// console.log(weather);