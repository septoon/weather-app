import WeatherDetailsContainer from "./WeatherDetailsContainer"
import WeatherIcon from "./WeatherIcon"
import '../App.css';
import { connect } from "react-redux";

const Main = ({isFetching}) => {
  // debugger
  return (
    // isFetching ?
    // <div className="app">Загрузка...</div>
    // :
    <div className="app">
        <WeatherIcon />
        <WeatherDetailsContainer />
    </div>
  )
}

export default connect((state) => ({isFetching: state.weatherData.fetching})) (Main)
