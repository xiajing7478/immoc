import React, { Component } from 'react'
import Logo from '../../components/logo/logo'
import { login } from '../../reduxs/user.redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { List, InputItem, WhiteSpace, WingBlank, Button} from 'antd-mobile'
@connect(
	state => state.user,
	{ login }
)
class Login extends Component{
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			pwd: ''
		}
		this.register = this.register.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}
	register() {
		this.props.history.push('/register')
	}
	handleChange(key, val) {
		this.setState({
			[key]: val
		})
	}
	handleLogin() {
		console.log('this.state', this.state)
		this.props.login(this.state)
	}
	render() {
		return (
			<div>
				<Logo></Logo>
				{ this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null }
				<h2>登录页</h2>
				<WingBlank>
					{this.props.msg ? <p className="err-msg">{this.props.msg}</p> : null}
					<List>
						<InputItem onChange={(v) => this.handleChange('username', v)}
						           placeholder="请输入用户">用户</InputItem>
						<WhiteSpace></WhiteSpace>
						<InputItem onChange={(v) => this.handleChange('pwd', v)}
						           type="password" placeholder="请输入密码">密码</InputItem>
					</List>
					<WhiteSpace></WhiteSpace>
					<Button onClick={this.handleLogin} type="primary">登录</Button>
					<WhiteSpace></WhiteSpace>
					<Button type="primary" onClick={this.register}>注册</Button>
				</WingBlank>
			</div>
		)
	}
}

export default Login

