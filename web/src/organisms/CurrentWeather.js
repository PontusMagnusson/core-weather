import React, {Component} from 'react'
import CurrentWeatherIcon from '../atoms/CurrentWeatherIcon'
import CurrentTemperature from '../atoms/CurrentTemperature'
import TemperatureHigh from '../atoms/TemperatureHigh'
import TemperatureLow from '../atoms/TemperatureLow'
import Humidity from '../atoms/Humidity'
import CurrentWeatherSummary from '../atoms/CurrentWeatherSummary';

export default class CurrentWeather extends Component {
    constructor(props) {
        super(props)

        let { temperature, temperatureUnit, dailyHigh, dailyLow, humidity, precipProbability, icon } = this.props.data;

        // Some mock data, probably don't need to set state here later?
        this.state = {
            temperature, temperatureUnit, dailyHigh, dailyLow, humidity, precipProbability, icon
        }
    }

    render(){
        return (
            <header className="App-header">
                <div className="current-weather-flex-grid">
                    <div className="current-weather-flex-column-left">
                        <CurrentWeatherIcon status="clear-day"/>
                        <CurrentTemperature temperature={this.state.temperature} unit={this.state.temperatureUnit}/>
                    </div>
                    <div className="current-weather-flex-column-right">
                        {/* In here we can have humidity, wind speed, daily high & low etc. */}
                        <TemperatureHigh value={this.state.dailyHigh} unit={this.state.temperatureUnit}/>
                        <TemperatureLow value={this.state.dailyLow} unit={this.state.temperatureUnit}/>
                        <Humidity value={this.state.humidity} unit={this.state.temperatureUnit}/>
                    </div>
                </div>
                <CurrentWeatherSummary/>
            </header>
        )
    }
}