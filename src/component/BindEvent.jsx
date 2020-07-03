import React from 'react'
export default class BindEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            age: 1
        }
    }
    render() {
        return <div>
            <hr/>
            { /* 注意事件只接收function 箭头函数本身就是匿名function */ }
            <button onClick={ this.eat }>按钮</button>
        </div>
    }
    eat = () => {
        console.log(this.state.age)
    }
}