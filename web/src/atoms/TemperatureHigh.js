import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHigh } from '@fortawesome/pro-light-svg-icons'

export default class TemperatureHigh extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div id="daily-temperature-high" className="flex-column-item">
                <FontAwesomeIcon icon={faTemperatureHigh} />
                Warm
            </div>
        )
    }
}