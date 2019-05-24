import React, {Component} from 'react'

export default class CurrentTemperature extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <p>{`${this.props.temperature}°${this.props.unit}`}</p>
        )
    }
}