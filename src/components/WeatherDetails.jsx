import preloader from '../images/preloader.svg'

function WeatherDetails({ city, temperature }) {
    if (city === null || temperature === null) {
        return <div><img src={preloader} alt="Loading..." /></div>
    } else {
        return (
            <div className="weather-details">
                <div className="city">{city}</div>
                <div className="temperature">{Math.floor(temperature)} &deg; C</div>
            </div>
        )
    }
}
 
export default WeatherDetails;
