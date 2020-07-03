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
            <hr/>
            { /* 注意事件只接收function 箭头函数本身就是匿名function */ }
            <button onClick={ this.eat }>打印</button>
            <hr/>
            <button onClick={ () => this.updateState("😁") } >修改</button>
        </div>
    }
    eat = () => {
        console.log(this.state.msg)
    }
    updateState = (value) => {
        // 在react中如果想为state重的值重新赋值 推荐使用setState
        this.setState({
            msg: this.state.msg + value
        }, () => console.log(this.state.msg));
    }
}