import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import { connect } from 'react-redux'
import NavLink from '../navLink/navLink'
import { withRouter, Route, Switch } from 'react-router-dom'
import Boss from '../boss/boss'
import Genuis from '../genuis/genuis'
import User from '../user/user'
import {getMsgList, reciveMsg } from "../../reduxs/chat.redux";
function Msg() {
	return <h2>msg首页</h2>
}

@withRouter
@connect(
	state => state,
	{ getMsgList, reciveMsg }
)
class Dashboard extends Component{
	componentDidMount() {
		if (!this.props.chat.chatmsg.length) {
			this.props.getMsgList()
			this.props.reciveMsg()
		}
	}
	render(){
		const user = this.props.user
		const { pathname } = this.props.location
		const navList= [
			{
				path: '/boss',
				text: '牛人',
				icon: 'boss',
				title: '牛人列表',
				component: Boss,
				hide: user.type === 'genuis'
			},
			{
				path: '/genius',
				text: 'boss',
				icon: 'job',
				title: 'Boss列表',
				component: Genuis,
				hide: user.type === 'boss'
			},
			{
				path: '/msg',
				text: '消息',
				icon: 'msg',
				title: '消息列表',
				component: Msg
			},
			{
				path: '/me',
				text: '我',
				icon: 'user',
				title: '个人中心',
				component: User
			}
		]
		return (
			<div>
				<NavBar className='fixed-header' mode="dard">{ navList.find(v => v.path === pathname).title}</NavBar>
				<div style={{marginTop:15}}>
					<Switch>
						{navList.map(v => (
							<Route key={v.path} path={v.path} component={v.component}></Route>
						))}
					</Switch>
				</div>
				<NavLink data={navList}></NavLink>
			</div>
		)
	}
}
export default Dashboard
