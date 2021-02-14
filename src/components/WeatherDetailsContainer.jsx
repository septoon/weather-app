import React from 'react';
import { connect } from 'react-redux';
import WeatherDetails from './WeatherDetails';
import { getAdress, getTemp, toggleIsFetching } from '../redux/weather-reducer'

class WeatherDetailsContainer extends React.Component {
    componentDidMount () {
        this.props.getAdress()
        this.props.getTemp()
    }

    render () {
        return (
            <>
                <WeatherDetails city={this.props.city}
                                temperature={this.props.temperature} />
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    city: state.weatherData.city,
    temperature: state.weatherData.temperature
})
 
export default connect(mapStateToProps, { getAdress, getTemp, toggleIsFetching }) (WeatherDetailsContainer);
