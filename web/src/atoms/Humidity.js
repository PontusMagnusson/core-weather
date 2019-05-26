import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHumidity } from '@fortawesome/pro-light-svg-icons'

export default class Humidity extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="current-humidity" className="flex-column-item">
                <FontAwesomeIcon icon={faHumidity} />
                {this.props.value}%
            </div>
        )
    }
}