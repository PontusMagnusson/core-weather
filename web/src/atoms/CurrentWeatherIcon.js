import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun, faCloud, faCloudSun, faWind, faFog, faMeteor, faCloudShowers} from '@fortawesome/pro-light-svg-icons'

export default class CurrentWeatherIcon extends Component {
    constructor(props){
        super(props)
        
        switch(this.props.status){
            case "PartlyCloudyDay":
                    this.state = {
                        statusIcon: faCloudSun,
                        canRotate: false
                    }
                break;
            case "Cloudy":
                    this.state = {
                        statusIcon: faCloud,
                        canRotate: false
                    }
                break;
            case "ClearDay":
                    this.state = {
                        statusIcon: faSun,
                        canRotate: true
                    }
                break;
            case "Rain":
                    this.state = {
                        statusIcon: faCloudShowers,
                        canRotate: false
                    }
                break;
            case "Wind":
                    this.state = {
                        statusIcon: faWind,
                        canRotate: false
                    }
                break;
            case "Fog":
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