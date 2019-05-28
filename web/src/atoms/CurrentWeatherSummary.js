import React, { Component } from 'react'

export default class CurrentWeatherSummary extends Component {
    render(){
        return(
            <div id="current-weather-summary">
                <p>{this.props.value}</p>
                <h2>{this.props.location}</h2>
            </div>
        )
    }
}