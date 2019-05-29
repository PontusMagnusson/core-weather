import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHurricane } from '@fortawesome/pro-light-svg-icons'

export default class LoadingSpinner extends Component {
    render(){
        return(
            <FontAwesomeIcon icon={faHurricane} size="6x" flip="both" spin/>
        )
    }
}