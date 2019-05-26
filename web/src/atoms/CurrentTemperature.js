import React, {Component} from 'react'

export default class CurrentTemperature extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <h2>{`${this.props.temperature}°${this.props.unit}`}</h2>
        )
    }
}