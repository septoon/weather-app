import './App.css';
import WeatherDetailsContainer from './components/WeatherDetailsContainer';
import WeatherIcon from './components/WeatherIcon';

function App() {
    const time = new Date().getHours()
    return (
        <div className="app" data-hour={time}>
        <WeatherIcon />
        <WeatherDetailsContainer />
    </div>
    )
}

export default App
