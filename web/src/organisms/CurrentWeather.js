import React, {Component} from 'react'
import CurrentWeatherIcon from '../atoms/CurrentWeatherIcon'
import CurrentTemperature from '../atoms/CurrentTemperature'
import TemperatureHigh from '../atoms/TemperatureHigh'
import TemperatureLow from '../atoms/TemperatureLow'
import Humidity from '../atoms/Humidity'
import CurrentWeatherSummary from '../atoms/CurrentWeatherSummary';

export default class CurrentWeather extends Component {
    render(){

        let { icon, temperature, temperatureUnit, dailyHigh, dailyLow, humidity, summary, location } = this.props.data;

        return (
        <div>
            <div className="current-weather-flex-grid">
                <div className="current-weather-flex-column-left">
                    <CurrentWeatherIcon icon={icon}/>
                    <CurrentTemperature temperature={temperature} unit={temperatureUnit}/>
                </div>
                <div className="current-weather-flex-column-right">
                    {/* In here we can have humidity, wind speed, daily high & low etc. */}
                    <TemperatureHigh value={dailyHigh} unit={temperatureUnit}/>
                    <TemperatureLow value={dailyLow} unit={temperatureUnit}/>
                    <Humidity value={humidity} unit={temperatureUnit}/>
                </div>
            </div>
            <CurrentWeatherSummary value={summary} location={location}/>
        </div>
        )
    }
}