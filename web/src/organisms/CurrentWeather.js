import React, {Component} from 'react'
import CurrentWeatherIcon from '../atoms/CurrentWeatherIcon'
import CurrentTemperature from '../atoms/CurrentTemperature'
import TemperatureHigh from '../atoms/TemperatureHigh'
import TemperatureLow from '../atoms/TemperatureLow'
import Humidity from '../atoms/Humidity'

export default class CurrentWeather extends Component {
    constructor(props) {
        super(props)

        // Some mock data, probably don't need to set state here later?
        this.state = {
            temperature: '19',
            temperatureUnit: 'C',
            humidity: '60',
            precipProbability: '50',
            icon: 'clear-day'
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
                        <TemperatureHigh/>
                        <TemperatureLow/>
                        <Humidity/>
                    </div>
                </div>
                <h2>Gothenburg, Sweden</h2>
            </header>
        )
    }
}