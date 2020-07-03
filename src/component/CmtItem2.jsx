import React from 'react'
import CmtList2 from '@/component/CmtList2'
// 规定自己的样式用less或者sass 公共包的样式是css 只对less或者sass文件进行模块化
import cssObj from  '@/css/cmtList.scss'
// 引用node_modules上的包 省略node_modules之前的目录 直接以包名引入
import 'bootstrap/dist/css/bootstrap.css'
export default class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            commonList: [
                { id: 1, user: "张三", content: "哈哈，沙发" },
                { id: 2, user: "李四", content: "哈哈，电视" },
                { id: 3, user: "王五", content: "哈哈，冰箱" },
                { id: 4, user: "赵六", content: "哈哈，洗衣机" },
                { id: 5, user: "田七", content: "哈哈，山炮" }
            ]
        }
    }
    render() {
        return <div>
            <button className='btn btn-primary'>按钮</button>
            <h1 className={ cssObj.title }>这是评论列表组件</h1>
            { this.state.commonList.map(item => {
                return <CmtList2 { ...item } key={ item.id } />
            }) }
            </div>
    }
}