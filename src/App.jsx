import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Main from './components/Main'

function App({city, latitude, longitude}) {
    console.log(latitude.toString())
    console.log(longitude)
    return (
        <>
            <Main /> 
        </>
    )
}

const mapStateToProps = (state) => ({
    city: state.weatherData.city,
    latitude: state.weatherData.lat,
    longitude: state.weatherData.lon
})

export default connect(mapStateToProps, {}) (App)
