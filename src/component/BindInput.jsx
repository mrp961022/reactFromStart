import React from 'react'
export default class BindEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: "哈哈",
            name: "张三",
            age: "21",
            gender: "男"
        }
    }
    render() {
        return <div>
            <button onClick={ () => this.updateState("😁") } >修改</button>
            <input onChange={ (e) => this.changeState(e.target.value) } type="text" value={ this.state.msg } style={{width:"100%"}}/>
        </div>
    }
    updateState = (value) => {
        // 在react中如果想为state重的值重新赋值 推荐使用setState
        this.setState({
            msg: this.state.msg + value
        }, () => console.log(this.state.msg));
    }
    changeState = (value) => {
        this.setState({
            msg: value
        })
    }
}