import React from 'react'
import Style from '@/component/style'
export default function Hello(props) {
    return <div style={Style.itemStyle}>
        <h1 style={Style.userStyle}>评论人：{ props.user }</h1>
        <p style={Style.contendStyle}>评论内容：{ props.content }</p>
    </div>
}