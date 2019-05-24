import React, { Component } from 'react'
import TextSearch from '../atoms/TextSearch';
import CurrentWeather from './CurrentWeather'
import '../App.css'

export default class Forecast extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <TextSearch placeholder="Write here!"/>
            </div>
        )
    }
}