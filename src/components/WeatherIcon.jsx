import {connect} from 'react-redux'

const WeatherIcon = ({ weatherCode }) => {
    const time = new Date().getHours()
    const timeOfDay = (time > 7 && time < 18) ? 'day' : 'night';
    const className = `weather-icon wi wi-owm-${timeOfDay}-${weatherCode}`;

    return <i className={className}></i>;
}

const mapStateToProps = (state) => ({
    weatherCode: state.weatherData.weatherCode
})
 
export default connect(mapStateToProps, {}) (WeatherIcon);