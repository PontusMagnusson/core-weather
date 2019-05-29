import React, { Component } from 'react'

export default class AppHeader extends Component {
    render(){
        return(
            <header className="App-header">
                {this.props.children}
            </header>
        )
    }
}