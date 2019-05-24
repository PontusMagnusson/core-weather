import React, {Component} from 'react'
import Forecast from '../organisms/Forecast'
import CurrentWeather from '../organisms/CurrentWeather'

export default class Weather extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){

        if('geolocation' in navigator) {
            console.log('Geolocation is available')
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords.latitude)
                console.log(position.coords.longitude)
            })
        } else {
            console.log('Geolocation is not available')
        }
        
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
            <div>
                <CurrentWeather/>
                <Forecast/>
            </div>
        )
    }
}