import React, {Component} from 'react'
import Forecast from '../organisms/Forecast'
import CurrentWeather from '../organisms/CurrentWeather'
import LoadingSpinner, {} from '../atoms/LoadingSpinner'
import AppHeader from '../organisms/AppHeader'
import TextSearch from '../atoms/TextSearch'
import * as WeatherService from '../services/WeatherService.js'
import NoResult from '../organisms/NoResult';

export default class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            allowedGeolocating: true,
            searchQuery: "",
            data: {}
        }

        this.onGeolocationFailure = this.onGeolocationFailure.bind(this)
        this.onGeolocationSuccess = this.onGeolocationSuccess.bind(this)
        this.setSearchQuery = this.setSearchQuery.bind(this)
    }

    componentDidMount() {
        // If search query is empty, try to use location from browser geolocation
        if(this.state.searchQuery === "") {
            if('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(this.onGeolocationSuccess, this.onGeolocationFailure)
            }
        // Otherwise we send the query to the api and see what we get back.
        } else {
            console.log("Is this called")
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.searchQuery !== prevState.searchQuery && this.state.searchQuery !== "") {
            WeatherService.fetchWeatherByLocation(this.state.searchQuery, 
                (err, data) => {
                    if(err){
                        console.log(err)
                    }
                    console.log(data)
                    this.setState({
                        loading: false,
                        data: data
                    })
                })
        }
    }

    onGeolocationSuccess(position) {
        WeatherService.fetchWeatherByCoordinates(position.coords.latitude, 
            position.coords.longitude,
            (err, data) => {
                if(err) {
                    console.log(err)
                }

                console.log(data)
                this.setState({
                    loading: false,
                    data: data
                })
            })
    }

    onGeolocationFailure(error) {
        if(error.code === 1){
            console.log("Geolocation permission denied by user")
        } else if (error.code === 2) {
            console.log("Geolocation unavailable")
        } else {
            console.log("Geolocation timed out")
        }

        // At this point we should probably display some default weather data or something.
        this.setState({
            loading: false,
            allowedGeolocating: false
        })
    }

    setSearchQuery(query) {

        console.log(query)

        this.setState({
            searchQuery: query,
            loading: true
        })
    }

    render(){
        let currentWeather
        let forecast


        let {data, loading, allowedGeolocating, searchQuery} = this.state

        if(data.currently) {
            currentWeather = <CurrentWeather data={data.currently}/>
        }
        else {
            currentWeather = <NoResult query={searchQuery} allowedGeolocating={allowedGeolocating}/>
        }

        if(data.daily) {
            forecast = <Forecast data={data.daily} />
        }
        else {
            forecast = ""
        }

        return (
            <div>
                {loading ? (
                    <AppHeader>
                        <LoadingSpinner/>
                    </AppHeader>
                ) : (
                    <div>
                        <AppHeader>
                            <TextSearch submitSearch={this.setSearchQuery} placeholder="Search"/>
                            {currentWeather}
                        </AppHeader>
                        {forecast}
                    </div>
                )}
            </div>
        )
    }
}