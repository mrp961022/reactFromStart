## 代码片段 注释代码写在中间可以折叠
```
//#crgion

//#endregion
```

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
* 事件名称为首字母小写的驼峰命名 如果有入参这样写
```
onClick={ () => this.updateState("aaa") } // 箭头函数返回值就是那个方法
```
* 方法名称前面要加`this` 注意方法使用箭头函数 或者绑定方法加上`.bind(this)` 不然无法取到构造器函数中`state`的值
* 如果想为`state`重的值重新赋值 推荐使用`setState` `setState`修改值不会影响其他的`state`值
* `setState`方法是异步的 第二个参数就是修改后执行的方法(回掉函数)
* `<input type='text'/>`中如果绑定`value` 要么提供一个`readonly`属性 要么加上`onChange`事件
```
// input 中 onChange 监听变化
// 第一种方式 通过 e.target.value
<input type="text" onChange={ (e) => this.方法(e.target.value) }/>
// 第二种方式 通过ref
<input type="text" ref="text" onChange={ () => this.方法() }/>
// 方法内使用 this.refs.text.value 
```

### 组件生命周期对比 `vue` 和 `react`
* 生命周期：从创建 到运行 再到销毁的过程
* 生命周期函数：在生命周期过程中必须执行的函数
> `vue` 生命周期和生命周期函数
* `new Vue()` 进入组件创建过程
* `Init Event & Lifecycle` 初始化组件的事件和生命周期函数 执行完这一步 组件的生命周期函数就已经全部初始化好了 等待依次去调用
* `beforeCreate` 组件创建阶段遇到的第一个生命周期函数 此时组件的`data` `methods` 以及dom结构都没有初始化
* `Init injections & reactivity` 这个阶段正在初始化`data` 以及 `methods`
* `created` 组件的`data`和`methods`已经初始化完毕 dom结构还没有初始化 一般在这个位置进行`ajax`请求
* `Has "el" option?` 是否包含`el` 属性
* `Has "template" option?` 是否包含 `template` 属性
* `no el` `when vm.$mount(el) is called` 可以当实例创建好 手动指定`el` 
* `el && template` `Complie template into render function *` 有`el`并且有`template` 编译`template`所对应的模版编译到`render function` 此时模版挂在到内存上 还没有挂载到页面上
* `el && !(template)` `Compile el's outerHTML as template *` 有`el`但是没有`template` 将`el`对应的结构编译为`template`模板 此时模版挂在到内存上 还没有挂载到页面上
* `beforeMount` 模板在内存中编译完成会触发 此时内存中的模板结构还没有真正渲染到页面上 页面上此时看不到真是数据 此时用户只能看到一个模板页面看不到真是数据
* `Create vm.$el and replace "el" with it` 此时正在把内存中编译好的模板结构替换到页面上
* `mounted` 组件创建阶段最后一个生命周期函数 此时页面已经真正的渲染完毕 用户可以看到真实的页面数据了 这个生命周期执行结束 组件已经有离开创建阶段 进入运行中阶段 如果用到了一些第三方ui插件且需要被初始化 例如地图 echarts等 需要在这一步进行初始化操作
* `beforeUpdate` 当`data`中的数据被修改触发 执行此函数时 数据是新的 页面上呈现的数据是旧的
* `Virtual DOM re-render and patch` 正在根据最新的`data`数据重新渲染内存中的模板结构 并把渲染好的模板结构替换到页面上
* `updated` 最新的数据已经完成了更新 此时`data`数据是最新的同时页面上呈现的数据也是最新的
* `beforeDestroy` 组件即将被销毁 还没有真正开始销毁 此时组件还是正常可用的 `data` `methods` 依然可以访问
* `Teardown watchers,child components and event listeners` 正在销毁中
* `destroyed` 组件已经被销毁 `data` `methods` 已经不可用
> `react` 生命周期和生命周期函数 
### 组件的生命周期可分成三个状态：
* `Mounting`：已插入真实 DOM
* `Updating`：正在被重新渲染
* `Unmounting`：已移出真实 DOM
#### 生命周期的方法有：

* `componentWillMount` 在渲染前调用 在客户端也在服务端 

* `render` 开始渲染真正的虚拟dom 当render执行完成 内存中就有了虚拟dom

* `componentDidMount` : 在第一次渲染后调用 只在客户端 之后组件已经生成了对应的DOM结构 可以通过`this.getDOMNode()`来进行访问  如果你想和其他JavaScript框架一起使用 可以在这个方法中调用`setTimeout`  `setInterval`或者发送`AJAX`请求等操作(防止异步操作阻塞UI) 

* `componentWillReceiveProps` 在组件接收到一个新的 `prop` (更新后)时被调用 这个方法在初始化`render`时不会被调用 

* `shouldComponentUpdate` 返回一个布尔值 在组件接收到新的`props`或者`state`时被调用 在初始化时或者使用forceUpdate时不被调用 
可以在你确认不需要更新组件时使用 

* `componentWillUpdate` 在组件接收到新的`props`或者`state`但还没有`render`时被调用 在初始化时不会被调用 

* `render` 重新根据最新的`state`和`props`重新渲染一颗内存中的虚拟dom树 render调用完毕的时候 内存中的旧的dom树已经被新的dom树替换 页面还是旧的

* `componentDidUpdate` 在组件完成更新后立即调用 在初始化时不会被调用 

* `componentWillUnmount` 在组件从 `DOM` 中移除之前立刻被调用 
