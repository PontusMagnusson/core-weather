import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHumidity } from '@fortawesome/pro-light-svg-icons'

export default class Humidity extends Component {
    render() {
        return (
            <div id="current-humidity" className="flex-column-item" title="Humidity">
                <FontAwesomeIcon icon={faHumidity}/>
                {this.props.value}%
            </div>
        )
    }
}