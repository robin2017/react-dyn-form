import React from 'react';
import ReactDOM from 'react-dom';


import DynForm from './dynForm/dynForm'


//自定义组件配置信息
const compConfig = [
    {
        type: 'input',
        name: '姓名',
        value: '123'
    },
    {
        type: 'select',
        name: '年龄',
        value: 11,
        options: [11, 22, 33]
    },
    {
        type: 'input',
        name: '毕业学校',
        value: 'seu',

    },
    {
        type: 'select',
        name: '性别',
        value: '男',
        options: ['男', '女']
    },
];

class DynFormTest extends React.Component {
    handleChange = (val) => {
        console.log('动态表单变化值:', val)
    };

    render() {
        return (
            <DynForm formConfig={compConfig} change={this.handleChange}/>
        )
    }
}

ReactDOM.render(<DynFormTest/>, document.getElementById('root'));
