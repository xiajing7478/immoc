import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import { connect } from 'react-redux'
import NavLink from '../navLink/navLink'
import { withRouter, Route } from 'react-router-dom'
function Boss() {
	return <h2>Boss首页</h2>
}
function Genius() {
	return <h2>Genius首页</h2>
}

function Msg() {
	return <h2>msg首页</h2>
}
function User() {
	return <h2>User首页</h2>
}
@withRouter
@connect(
	state => state
)
class Dashboard extends Component{
	render(){
		const user = this.props.user
		console.log(this.props.user)
		const { pathname } = this.props.location
		console.log(pathname)
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
				component: Genius,
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
				<NavBar mode="dard">{ navList.find(v => v.path === pathname).title}</NavBar>
				<h2>content</h2>
				<NavLink data={navList}></NavLink>
			</div>
		)
	}
}
export default Dashboard
