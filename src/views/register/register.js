import React, { Component } from 'react'
import Logo from '../../components/logo/logo'
import { connect } from 'react-redux'
import { register } from '../../reduxs/user.redux'
import { Redirect } from 'react-router-dom'
import './index.css'
import { List, InputItem, Radio, WhiteSpace, WingBlank, Button} from 'antd-mobile'
import CommonForm from '../../components/commonForm/commonForm'
@connect(
	state => state.user,
	{ register }
)
@CommonForm
class Register extends Component{
	constructor(props) {
		super(props)
		this.handleRegister = this.handleRegister.bind(this)
		// this.state = {
		// 	username: '',
		// 	pwd: '',
		// 	repeatPwd: '',
		// 	type: 'genuis',
		// }
	}
	componentDidMount(){
		this.props.handleChange('type', 'genuis')
	}
	handleRegister() {
		this.props.register(this.props.state)
	}
	// handleChange(key, val){
	// 	this.setState({
	// 		[key]: val
	// 	})
	// }
	render() {
		const RadioItem = Radio.RadioItem;
		return (
			<div>
				{ this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null }
				<Logo></Logo>
				<h2>注册页</h2>
				<WingBlank>
					{this.props.msg ? <p className="err-msg">{this.props.msg}</p> : null}
					<List>
						<InputItem onChange={(v) => this.props.handleChange('username', v)}
						           placeholder="请输入用户">用户</InputItem>
						<WhiteSpace></WhiteSpace>
						<InputItem onChange={(v) => this.props.handleChange('pwd', v)} type="password"
						           placeholder="请输入密码">密码</InputItem>
						<WhiteSpace></WhiteSpace>
						<InputItem onChange={(v) => this.props.handleChange('repeatPwd', v)} type="password"
						           placeholder="请输入密码">确认密码</InputItem>
						<WhiteSpace></WhiteSpace>
						<RadioItem onChange={() => this.props.handleChange('type','genuis')}
						           checked={this.props.state.type === 'genuis'}>牛人</RadioItem>
						<RadioItem onChange={() => this.props.handleChange('type','boss')}
						           checked={this.props.state.type === 'boss'}>BOSS</RadioItem>
					</List>
					<WhiteSpace></WhiteSpace>
					<Button type="primary" onClick={this.handleRegister}>注册</Button>
				</WingBlank>
			</div>
		)
	}
}
export default Register
