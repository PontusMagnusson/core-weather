import React, { Component } from 'react'

export default class CurrentWeatherSummary extends Component {
    render(){
        return(
            <div id="current-weather-summary">
                <p>Sunny throughout the day, showers in the evening</p>
                <h2>Gothenburg, Sweden</h2>
            </div>
        )
    }
}