import { getAddressData, getTemperature } from "../api/api"

const SET_CITY = 'weather/SET_CITY'
const SET_LAT = 'weather/SET_LAT'
const SET_LON = 'weather/SET_LON'
const SET_TEMPERATURE = 'weather/SET_TEMPERATURE'
const SET_WEATHER_CODE = 'weather/SET_WEATHER_CODE'
const TOGGLE_FETCHING = 'weather/TOGGLE_FETCHING'

const initialState = {
  city: null,
  temperature: null,
  weatherCode: null,
  fetching: true
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY: {
      return {...state, city: action.city}
    }
    case SET_TEMPERATURE: {
      return {...state, temperature: action.temp}
    }
    case SET_WEATHER_CODE: {
      return {...state, weatherCode: action.code}
    }
    case TOGGLE_FETCHING: {
      return {...state, fetching: action.isFetch}
    }
    default:
      return state
  }
}

const setCity = (city) => ({type: SET_CITY, city})
const setTemperature = (temp) => ({type: SET_TEMPERATURE, temp})
const setWeatherCode = (code) => ({type: SET_WEATHER_CODE, code})
export const toggleIsFetching = (isFetch) => ({type: TOGGLE_FETCHING, isFetch})

export const getAddress = () => async (dispatch) => {
  const response = await getAddressData()
  dispatch(setCity(response.city))
}

export const getTemp = () => async (dispatch) => {
  const response = await getTemperature()
  console.log(response)
  // console.log(`${response.wind.speed} m/s`)
  dispatch(toggleIsFetching(false))
  dispatch(setTemperature(response.main.temp))
  dispatch(setWeatherCode(response.weather[0].id))
}

export default weatherReducer
