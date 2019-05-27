import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/pro-light-svg-icons'


export default class NotFound extends Component {

    render(){
        return (
            <header className="App-header">
                <FontAwesomeIcon className="levitate" icon={faGhost} size="6x"/>
                <h1>You've found the 404 ghost</h1>
                <a href="/">I'm scared, take me home</a>
            </header>
        )
    }
}