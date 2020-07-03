import React from 'react'
import Hello from '@/component/Hello'
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
            <h1  style={{color: "red",fontSize: "25px", fontWeight: 200, textAlign: "center"}}>这是评论列表组件</h1>
            { this.state.commonList.map(item => {
                return <Hello { ...item } key={ item.id } />
            }) }
            </div>
    }
}