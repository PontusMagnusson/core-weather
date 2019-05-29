import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/pro-light-svg-icons'


export default class NoResult extends Component {

    render(){

        let {query, allowedGeolocating} = this.props

        let displayText = ""

        if (query === "" && !allowedGeolocating) {
            displayText = "Please enter your search above"
        }
        else if (query !== "" ) {
            displayText = `No result found for "${query}"`
        }

        return (
            <div>
                <FontAwesomeIcon icon={ faQuestionCircle } size="4x" />
                <h4>{displayText}</h4>
            </div>
        )
    }
    
}