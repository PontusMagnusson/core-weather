import React, {Component} from 'react'

export default class CurrentTemperature extends Component {
    render() {
        return (
            <h2 title="Current temperature">{`${this.props.temperature}°${this.props.unit}`}</h2>
        )
    }
}