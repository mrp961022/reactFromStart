import React from 'react'
import cssObj from '@/css/cmtitem.scss'
export default function Hello(props) {
    return <div className={ cssObj.cmtbox }>
        <h1 className={ [cssObj.title, "test"].join(" ") } >评论人：{ props.user }</h1>
        <p className={ cssObj.content }>评论内容：{ props.content }</p>
    </div>
}