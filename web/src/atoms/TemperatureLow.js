import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureLow } from '@fortawesome/pro-light-svg-icons'

export default class TemperatureLow extends Component {
    render(){
        return (
            <div id="daily-temperature-low" className="flex-column-item" title="Daily low">
                <FontAwesomeIcon icon={faTemperatureLow} />
                {`${this.props.value}°${this.props.unit}`}
            </div>
        )
    }
}