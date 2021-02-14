import React from 'react';
import { connect } from 'react-redux';
import WeatherDetails from './WeatherDetails';
import { getAdress, getTemp } from '../redux/weather-reducer'
import axios from 'axios';

class WeatherDetailsContainer extends React.Component {
    componentDidMount () {
        this.props.getAdress()
        this.props.getTemp()

        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=056b91ad44e2ed8399949215e7ec5215`)
        .then(response => {
            return response
        })
        
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
 
export default connect(mapStateToProps, { getAdress, getTemp }) (WeatherDetailsContainer);
