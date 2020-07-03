import React from 'react'; // 创建组建 生命周期 虚拟dom
import ReactDom from 'react-dom'; // 创建好的虚拟dom和组建渲染到页面上

// 创建虚拟dom元素
// 参数1 创建元素类型 字符串 元素名称
// 参数2 对象 null 表示dom的属性
// 参数3 自节点 其他虚拟dom 或者文本节点
// 参数n 同参数3
// const myH1 = React.createElement('h1',{
//     id:"myh1",
//     title:"this is h1"
// },"我是h1")
// const myDiv = React.createElement('div',{
//     id: "myDiv",
//     title: "this is div"
// },myH1)
// // 使用react dom 虚拟dom渲染到页面上
// // 参数1 需要渲染的虚拟dom
// // 参数2 指定页面上的一个容器
// ReactDom.render(myDiv,document.getElementById("app"))
// 在js中不能直接使用html标记 可以使用babel转换js中的标签
// 在js中混合写入类似于html的语法叫做jsx语法 符合xml规范的js代码
// jsx语法本质还是js代码 是在运行的时候转换成了React.createElement
let a = 10;
let str = "你好中国";
let boo = true;
let ptitle = 999;
// 当需要使用表达式或者变量时 把内容写在花括号里面
const myh1 = <h1>我是h1</h1>
const arr = [
    <h2 key='h2'>这是h2</h2>,
    <h3 key='h3'>这是h3</h3>
]
const strArr = [
    "兰",
    "柯南",
    "小五郎",
    "哀"
]
const myDiv = <div id="mydiv" title="这是div">
    { a }
    <hr/>
    { str }
    <hr/>
    { boo ? '条件为真':'条件为假' } {/** 等同于vue的{{  }} */}
    <hr/>
    <p className="myp" title={ ptitle }>这是p</p>
    { myh1 }
    { arr } {/** react中不需要遍历标签数组 */}
    <hr/>
    { strArr.map((item, index) => <h3 key={ index }>{ item }</h3>) }
    {/** 遍历一个非标签数组数组 */}
    <label htmlFor="myele">111</label>
</div>
// 调用render渲染函数
ReactDom.render(myDiv, document.getElementById("app"))