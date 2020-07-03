import React from 'react'
import ReactDom from 'react-dom'

// 第一种的创建组建的方式
function Hello(props) {
    // 组建中必须返回一个合法的jsx虚拟dom元素
    console.log(props) // props 组建中接收外界传过来的参数(只读属性)      
    return <div>111</div>
}
const Dog = {
    name: '大黄',
    age: 3,
    gender: '雄'
}

// 3. 调用render函数渲染 jsx XML 比 HTML 严格的多
ReactDom.render(<div>
    {/* <Hello name={ Dog.name } age={ Dog.age } gender={ Dog.gender } /> */}
    <Hello { ...Dog }/>
    {/* 直接把组建以标签形式丢到页面上 */}
</div>,document.getElementById("app"))
