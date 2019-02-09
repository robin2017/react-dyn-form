import React from 'react'

export default class Input extends React.Component {
    handleChange = (event) => {
        this.props.change && this.props.change(event.target.value)
    }
    render() {
        return (
            <input value={this.props.value} onChange={this.handleChange}></input>
        )
    }

}