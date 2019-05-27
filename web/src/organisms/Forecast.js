import React, { Component } from 'react'
import TextSearch from '../atoms/TextSearch'
import '../App.css'

export default class Forecast extends Component {
    render(){
        return (
            <div>
                <TextSearch placeholder="Write here!"/>
            </div>
        )
    }
}