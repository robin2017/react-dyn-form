import React from 'react'
import Input from './baseComp/input'
import Select from './baseComp/select'

export default class DynFormItem extends React.Component {
    change = (val) => {
        console.log('form item change:', val)
        this.props.change({[this.props.name]: val})
    };

    render() {
        const compMap = {
            input: <Input key={this.props.name} value={this.props.value} change={this.change}/>,
            select: <Select key={this.props.name} options={this.props.options} change={this.change}/>
        };
        return (
            <div>
                <label style={{width: this.props.titleWidth, display: 'inline-block'}}>
                    {this.props.name}</label>
                {compMap[this.props.type]}
            </div>

        )
    }
}