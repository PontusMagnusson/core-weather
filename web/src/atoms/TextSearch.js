import React, {Component} from 'react'
import '../App.css'

export default class TextSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    render(){
        return (
            <input type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange} />
        )
    }
}