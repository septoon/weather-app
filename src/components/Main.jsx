import WeatherDetailsContainer from "./WeatherDetailsContainer"
import WeatherIcon from "./WeatherIcon"
import '../App.css';
import { connect } from "react-redux";

const Main = (props) => {

  const date = new Date()
  const time = date.getHours()
  return (
    <div className="app" data-hour={time}>
        <WeatherIcon />
        <WeatherDetailsContainer />
    </div>
  )
}

export default connect((state) => ({isFetching: state.weatherData.fetching})) (Main)
