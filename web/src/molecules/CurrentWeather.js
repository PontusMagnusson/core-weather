import React, {Component} from 'react'
import CurrentWeatherIcon from '../atoms/CurrentWeatherIcon'
import CurrentTemperature from '../atoms/CurrentTemperature'

export default class CurrentWeather extends Component {
    constructor(props) {
        super(props)

        // Some mock data
        this.state = {
            temperature: '19',
            temperatureUnit: 'C',
            humidity: '60',
            precipProbability: '50',
            icon: 'clear-day'
        }
    }

    componentWillMount(){
        fetch('http://127.0.0.1:5000/api/values') // Not going to host this anywhere so this is good enough for now
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
        return (
            <header className="App-header">
                <CurrentWeatherIcon status="rain"/>
                <CurrentTemperature temperature={this.state.temperature} unit={this.state.temperatureUnit}/>
                <h2>Gothenburg, Sweden</h2>
            </header>
        )
    }
}