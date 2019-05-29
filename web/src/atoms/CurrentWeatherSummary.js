import React, { Component } from 'react'

export default class CurrentWeatherSummary extends Component {
    render(){
        return(
            <div id="current-weather-summary">
                <p>{this.props.value}</p>
                <h3>{this.props.location}</h3>
            </div>
        )
    }
}