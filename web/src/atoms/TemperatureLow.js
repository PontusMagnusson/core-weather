import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureLow } from '@fortawesome/pro-light-svg-icons'

export default class TemperatureLow extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div id="daily-temperature-low" className="flex-column-item">
                <FontAwesomeIcon icon={faTemperatureLow} />
                Cold
            </div>
        )
    }
}