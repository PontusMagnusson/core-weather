import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun, faCloud, faCloudSun, faWind, faFog, faMeteor, faCloudShowers, faCloudMoon, faMoon} from '@fortawesome/pro-light-svg-icons'

export default class CurrentWeatherIcon extends Component {
    constructor(props){
        super(props)

        let icon = this.getStatusIcon(this.props.icon)

        this.state = {
            statusIcon: icon
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.icon !== prevProps.icon) {
            let icon = this.getStatusIcon(this.props.icon)
            this.setState({
                statusIcon: icon
            })
        }
    }

    getStatusIcon(icon) {
        switch(icon){
            case "PartlyCloudyDay":
                    return {
                        svg: faCloudSun,
                        canRotate: false
                    }
            case "PartlyCloudyNight":
                return {
                    svg: faCloudMoon,
                    canRotate: false
                }
            case "Cloudy":
                    return {
                        svg: faCloud,
                        canRotate: false
                    }
            case "ClearDay":
                    return {
                        svg: faSun,
                        canRotate: true
                    }
            case "ClearNight": 
                    return {
                        svg: faMoon,
                        canRotate: false
                    }
            case "Rain":
                    return {
                        svg: faCloudShowers,
                        canRotate: false
                    }
            case "Wind":
                    return {
                        svg: faWind,
                        canRotate: false
                    }
            case "Fog":
                    return {
                        svg: faFog,
                        canRotate: false
                    }
            default:
                    return {
                        svg: faMeteor,
                        canRotate: true
                    }
        }
    }

    render() {
        return(
            <FontAwesomeIcon icon={this.state.statusIcon.svg} className={this.state.statusIcon.canRotate ? "slow-spin": ""} size="9x"/>
        )
    }
}