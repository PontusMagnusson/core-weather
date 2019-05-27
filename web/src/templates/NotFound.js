import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/pro-light-svg-icons'


export default class NotFound extends Component {

    render(){
        return (
            <header className="App-header">
                <FontAwesomeIcon className="levitate" icon={faGhost} size="6x"/>
                <h1>Oh no, this page does not exist</h1>
            </header>
        )
    }
}