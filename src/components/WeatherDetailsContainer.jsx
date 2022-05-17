import React from 'react';
import { connect } from 'react-redux';
import WeatherDetails from './WeatherDetails';
import { getAddress, getTemp, toggleIsFetching } from '../redux/weather-reducer'

class WeatherDetailsContainer extends React.Component {
    componentDidMount () {
        this.props.getAddress()
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
 
export default connect(mapStateToProps, { getAddress, getTemp, toggleIsFetching }) (WeatherDetailsContainer);
