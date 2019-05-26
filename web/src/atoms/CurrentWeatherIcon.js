import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun, faCloud, faCloudSun, faWind, faFog, faMeteor, faCloudShowers} from '@fortawesome/pro-light-svg-icons'

export default class CurrentWeatherIcon extends Component {
    constructor(props){
        super(props)

        let statusIcon;
        switch(this.props.status){
            case "partly-cloudy-day":
                    this.state = {
                        statusIcon: faCloudSun,
                        canRotate: false
                    }
                break;
            case "cloudy":
                    this.state = {
                        statusIcon: faCloud,
                        canRotate: false
                    }
                break;
            case "clear-day":
                    this.state = {
                        statusIcon: faSun,
                        canRotate: true
                    }
                break;
            case "rain":
                    this.state = {
                        statusIcon: faCloudShowers,
                        canRotate: false
                    }
                break;
            case "wind":
                    this.state = {
                        statusIcon: faWind,
                        canRotate: false
                    }
                break;
            case "fog":
                    this.state = {
                        statusIcon: faFog,
                        canRotate: false
                    }
                break;
            default:
                    this.state = {
                        statusIcon: faMeteor,
                        canRotate: false
                    }
                break;
        }
    }

    render(){
        return(
            <FontAwesomeIcon icon={this.state.statusIcon} className={this.state.canRotate ? "slow-spin": ""} size="9x"/>
        )
    }
}