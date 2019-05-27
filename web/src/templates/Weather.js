import React, {Component} from 'react'
import Forecast from '../organisms/Forecast'
import CurrentWeather from '../organisms/CurrentWeather'
import LoadingSpinner, {} from '../atoms/LoadingSpinner'
import AppHeader from '../organisms/AppHeader'
import TextSearch from '../atoms/TextSearch'

export default class Weather extends Component {
    constructor(props) {
        super(props)

        // // Set mock data
        // this.state = {
        //     data: {
        //         temperature: 20,
        //         temperatureUnit: 'C',
        //         dailyHigh: 25, 
        //         dailyLow: 15, 
        //         humidity: 60, 
        //         precipProbability: 13, 
        //         icon: 'clear-day'
        //     }
        // }

        this.state = {
            loading: true,
            data: {}
        }
    }

    componentWillMount(){
        if('geolocation' in navigator) {
            console.log('Geolocation is available')
            navigator.geolocation.getCurrentPosition((position) => {
                fetch(`http://127.0.0.1:5000/api/weather/${position.coords.latitude},${position.coords.longitude}`) // Not going to host this anywhere so this is good enough for now
                    .then((resp) => {
                        return resp.json()
                    })
                    .then((data) => {
                        console.log(data)
                        this.setState({
                            data: data,
                            loading: false
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
        }
    }


    render(){
        return (
            <div>
                {this.state.loading ? (
                    <AppHeader>
                        <LoadingSpinner/>
                    </AppHeader>
                ) : (
                    <div>
                        <AppHeader>
                            <TextSearch placeholder="Write here!"/>
                            <CurrentWeather data={this.state.data.currently}/>
                        </AppHeader>
                        <Forecast/>
                    </div>
                )}
            </div>
        )
    }
}