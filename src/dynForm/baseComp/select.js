import React from 'react'

export default class Select extends React.Component {
    handleChange = (event) => {
        this.props.change && this.props.change(event.target.value)
    };
    render() {
        let ops = this.props.options || [];
        let opComps = ops.map((op) => {
            return <option key={op}>{op}</option>
        })
        return (
            <select value={this.props.value} onChange={this.handleChange}>
                {opComps}
            </select>
        )
    }

}