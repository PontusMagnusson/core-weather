import React, { Component } from 'react'
import '../App.css'

export default class Forecast extends Component {

    constructor(props){
        super(props)
    }
    // Loop through some other forecast data here maybe...
    render(){
        let tableRows = this.props.data.map(item => {
            return (
            <tr>
                <td>{item.formattedDateString}</td>
                <td>{item.dailyHigh}°C</td>
                <td>{item.dailyLow}°C</td>
                <td>{item.humidity}%</td>
            </tr>
            ) 
        })

        return (
            <div className="content">
                <table className="forecasts">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Daily high</th>
                            <th>Daily low</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        )
    }
}