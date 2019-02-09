import React from 'react'
import DynFormItem from './dynFormItem'

export default class DynForm extends React.Component {
    constructor(props) {
        super(props);
        this.initProps();
    }

    initProps = () => {
        let configs = this.props.formConfig || [];
        let state = {};
        configs.forEach(config => {
            state[config.name] = config.value
        });
        this.state = state;
    };

    handleChange = (val) => {
        console.log('change:', val);
        this.setState(val)
        this.props.change && this.props.change(val)
    }

    render() {
        let configs = this.props.formConfig || []
        let comps = configs.map((config) => {
            return <DynFormItem type={config.type}
                                name={config.name}
                                key={config.name}
                                titleWidth={config.titleWidth || this.props.titleWidth}
                                value={config.value}
                                options={config.options}
                                change={this.handleChange}/>
        });
        return (
            comps
        )
    }
}