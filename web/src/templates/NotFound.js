import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/pro-light-svg-icons'
import AppHeader from '../organisms/AppHeader';


export default class NotFound extends Component {

    render(){
        return (
            <AppHeader>
                <FontAwesomeIcon className="levitate" icon={faGhost} size="6x"/>
                <h1>You've found the 404 ghost</h1>
                <a href="/">I'm scared, take me home</a>
            </AppHeader>
        )
    }
}