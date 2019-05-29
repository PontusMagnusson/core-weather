import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHigh } from '@fortawesome/pro-light-svg-icons'

export default class TemperatureHigh extends Component {
    render(){
        return (
            <div id="daily-temperature-high" className="flex-column-item" title="Daily high">
                <FontAwesomeIcon icon={faTemperatureHigh} />
                {`${this.props.value}°${this.props.unit}`}
            </div>
        )
    }
}