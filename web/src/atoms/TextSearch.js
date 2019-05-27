import React, {Component} from 'react'
import '../App.css'

export default class TextSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        // if user presses the enter key
        if(e.which === 13)
        {
            e.preventDefault();
    
            console.log(e.target.value)

            this.props.submitSearch(e.target.value)
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render(){
        return (
                <input type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange} onKeyUp={this.handleSubmit}/>
        )
    }
}