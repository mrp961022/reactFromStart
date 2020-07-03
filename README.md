## jsx语法
> 固定引入方式 引入名称及大小写不能改
```
import React from 'react'
import ReactDom from 'react-dom'
```
> 普通变量 { 变量名 }
> 正则表达式
```
{ boo ? '条件为真' : '条件为假' }
```
> html标签节点（jsx语法）直接 { 节点 }
> 节点数组 { 节点数组 }
> 普通数组 转换节点数组`vue`的`v-for`
```
{ strArr.map((item, index) => <h3 key={ index }>{ item }</h3>) }
```
> 注释
```
// 单行注释
{ /* 内容 */ }
// 多行注释
{
    // 内容
}
```
> 类`className` 属性的值如果是变量或者表达式`{ 变量|表达式 }`
> 在`jsx`中要写行内样式 不能直接使用原生style 要这么写 style={{ color:"red" }} 行内样式如果是字符类型样式要加引号

### react组件
> 第一种创建组件的方式
```
// 组件名称首字母必须大写
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
    {/* 第一种传递方式 */}
    {/* <Hello name={ Dog.name } age={ Dog.age } gender={ Dog.gender } /> */}
    {/* 第二种传递方式 */}
    <Hello { ...Dog }/>
    {/* 直接把组建以标签形式丢到页面上 */}
</div>,document.getElementById("app"))
```
> 第二种创建组件的方式
```
class Hello extends React.Component {
     // 在class关键字创建的组件中 如果想使用外部传递过来的props参数 不需要接收 直接this.props.xxx访问
     constructor() {
        // 组件继承React.Component 必须调用super()
        super(); 
        // 调用super以后才能使用this
        this.state = { 
            msg:'大家好 我是class创建的Hello组件',
         }
        // 相当于vue中的data(){ return {} }; 数据是可读可写的
    }
    render(){
        return (<div>{ this.props.name }{ this.props.age }岁了</div>);
    }
}
ReactDom.render(<Hello/>, document.getElementById('app'))
```
> 两种创建组件的方式有何不同
`class`关键字创建的组件是又状态组件 有自己的私有数据和生命周期函数
使用`function`创建的组件是无状态组件 只有一个`props` 没有私有数据和生命周期函数
### es6类和类的继承
> 声明类 构造器 属性 方法
```
class Animal {
    // 每一个类都有一个构造器函数
    // 构造器函数会在new创建实例对象前执行
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 在class中使用static声明的属性（方法）就是静态属性（方法）
    static info = 111
    // 实例方法 比较常用
    eat() {
        return `${this.name}吃肉`
    }
}
```
> 类的继承 子类继承`extends`继承父类的方法`super`继承父类的属性(如果子类没有新增属性可以不用写构造器)
```
class Dog extends Animal {
    constructor(name, age, food) {
        super(name,age) // 继承父类的属性 super 放在构造器最上边
        this.food = food; // 子类自己的属性
    }
    dogEat() {
        return `${this.name}吃${this.food}`
    }
}
```

### react 中样式冲突解决
> `webpack.config.js` `css-loader` 修改
```
    { test: /\.css$/, use: ['style-loader', 'css-loader?modules'] }, // cssloader配置 
    // cssloader启用模块化 防止样式冲突 通过?追加参数 modules 普通样式表启用模块化
    // 启用模块化后的使用方式 import cssObj from `css目录` 使用时 className={ cssObj.样式名 }
    // 另一种方式 新版css-loader的修改类名
    {test: /\.css$/,use: [{loader: "style-loader"}, 
    {loader: "css-loader",
        options: {
        modules: {
            localIdentName: "[path][name]-[local]-[hash:5]"
        }
        }
    }] },
    // localIdentName 每个值的意义
    · path 样式表相对项目根目录路径
    · name 样式表文件名
    · local 样式的类名
    · hash:length 表示一个32位的哈希值 length长度
```
### react中的事件
* 事件名称为首字母小写的驼峰命名
* 方法名称前面要加`this` 注意方法使用箭头函数 或者绑定方法加上`.bind(this)` 不然无法取到构造器函数中`state`的值