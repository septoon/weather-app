import { getAdressData, getTemperature } from "../api/api"

const SET_CITY = 'weather/SET_CITY'
const SET_TEMPERATURE = 'weather/SET_TEMPERATURE'
const SET_WEATHER_CODE = 'weather/SET_WEATHER_CODE'
const TOGGLE_FETCHING = 'weather/TOGGLE_FETCHING'

const initialState = {
  city: '',
  temperature: null,
  weatherCode: 803,
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
      debugger
      return {...state, fetching: action.isFetch}
    }
    default:
      return state
  }
}

export const setCity = (city) => ({type: SET_CITY, city})
const setTemperature = (temp) => ({type: SET_TEMPERATURE, temp})
const setWeatherCode = (code) => ({type: SET_WEATHER_CODE, code})
export const toggleIsFetching = (isFetch) => ({type: TOGGLE_FETCHING, isFetch})

export const getAdress = () => async (dispatch) => {
  const response = await getAdressData()
  dispatch(setCity(response.city))
}

export const getTemp = () => async (dispatch) => {
  const response = await getTemperature()
  dispatch(setTemperature(response.main.temp))
  dispatch(setWeatherCode(response.weather[0].id))
  dispatch(toggleIsFetching(false))
}

export default weatherReducer
