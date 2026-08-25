// import axios from "axios";

// const BASE_URL = "https://api.openweathermap.org/data/2.5";
const FAKE_SLOW_API = true;
const FAKE_SLOW_API_DELAY = 2000;

/* Get current weather conditions for a city with a slow API 
*  @param city City name
*  @return Current weather conditions
*/

export const getCurrentWEather = async (city: string) => {
    if (FAKE_SLOW_API) {
        await new Promise((r) => setTimeout(r, FAKE_SLOW_API_DELAY))
    }
    console.log(city)
}