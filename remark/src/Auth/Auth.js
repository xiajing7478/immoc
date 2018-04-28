import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login, getUserData } from './Auth.redux'
import { Button } from 'antd-mobile'
// 2个reducer 每个reducer都有一个state, 合并reducer -> co
@connect(
	state => state.auth,
	{ login, getUserData }
)
class Auth extends Component{
	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		data: {}
	// 	}
	// }
	// componentDidMount(){
	// 	axios.get('/data').then((res) => {
	// 		debugger
	// 		if (res.status === 200) {
	// 			this.setState({data: res.data})
	// 		}
	// 	})
	// }
	componentDidMount() {
		this.props.getUserData()
	}
	render() {
		return(
			<div>
				<h2>我的名字是{this.props.username}, 年龄{this.props.age}</h2>
				{ this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null }
				<h2>你没有权限,需要登录才能查看</h2>
				<Button onClick={this.props.login}>登录</Button>
			</div>
		)
	}
}
export default Auth
