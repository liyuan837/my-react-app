/**
 * Created by stb on 2018/1/30.
 */
import React from 'react';
import { Button } from 'antd-mobile';
import styles from '../styles/helloWord.css'
export default class HelloWord extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div >
                <div className={styles.contentBox}>1当前页面地址pathname：{this.props.location.pathname}</div>
                <div onClick={this.props.clickAction.bind(this)}>点击当前文本计数：{this.props.firstState.count}</div>
                <div onClick={this.props.getFistAction.bind(this)}>点击发起异步请求状态：{this.props.firstState.fetch_state}</div>
                <Button>default</Button>
            </div>
        )
    }
}