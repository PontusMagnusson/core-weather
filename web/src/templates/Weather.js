import React, {Component} from 'react'
import Forecast from '../organisms/Forecast'
import CurrentWeather from '../organisms/CurrentWeather'
import LoadingSpinner, {} from '../atoms/LoadingSpinner'
import AppHeader from '../organisms/AppHeader'
import TextSearch from '../atoms/TextSearch'

export default class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            allowedGeolocating: true,
            data: {}
        }

        this.onGeolocationFailure = this.onGeolocationFailure.bind(this)
        this.onGeolocationSuccess = this.onGeolocationSuccess.bind(this)
        this.fetchWeatherByCoordinates = this.fetchWeatherByCoordinates.bind(this)
        this.fetchWeatherByLocation = this.fetchWeatherByLocation.bind(this)
    }

    componentWillMount(){
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(this.onGeolocationSuccess, this.onGeolocationFailure)
        }
    }

    onGeolocationSuccess(position) {
        this.fetchWeatherByCoordinates(position.coords.latitude, position.coords.longitude)
    }

    onGeolocationFailure(error) {
        if(error.code === 1){
            console.log("Geolocation permission denied by user")
        } else if (error.code === 2) {
            console.log("Geolocation unavailable")
        } else {
            console.log("Geolocation timed out")
        }

        this.setState({
            loading: false,
            allowedGeolocating: false
        })
    }

    fetchWeatherByCoordinates(latitude, longitude) {
        fetch(`http://127.0.0.1:5000/api/weather/${latitude},${longitude}`) // Not going to host this anywhere so this is good enough for now
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
    }

    fetchWeatherByLocation(location) {
        fetch(`http://127.0.0.1:5000/api/weather/${location}`)
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
    }

    render(){
        let currentWeather;

        if(this.state.data) {
            currentWeather = <CurrentWeather data={this.state.data.currently}/>
        }
        else {
            currentWeather = ""
        }

        return (
            <div>
                {this.state.loading ? (
                    <AppHeader>
                        <LoadingSpinner/>
                    </AppHeader>
                ) : (
                    <div>
                        <AppHeader>
                            <TextSearch submitSearch={this.fetchWeatherByLocation} placeholder="Write here!"/>
                            {currentWeather} 
                        </AppHeader>
                        <Forecast/>
                    </div>
                )}
            </div>
        )
    }
}