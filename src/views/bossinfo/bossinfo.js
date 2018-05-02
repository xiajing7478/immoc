import React, { Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import AvatarSelector from  '../../components/avatarSelector/avatarSelector'
import { connect } from 'react-redux'
import { update } from '../../reduxs/user.redux'
@connect(
	state => state.user,
	{ update }
)
class BossInfo extends Component{
	constructor(props) {
		super(props)
		this.state= {
			title: '',
			desc: '',
			company: '',
			money: ''
		}
	}
	onChange(key, val) {
		this.setState({
			[key]: val
		})
	}
	render(){
		const path = this.props.location.pathname
		const redirectTo = this.props.redirectTo
		return(
			<div>
				{redirectTo && redirectTo !== path ? <Redirect to={this.props.redirectTo}></Redirect> : null}
				<NavBar mode="dark">BOSS完善信息页</NavBar>
				{/*<AvatarSelector selectAvatar={this.selectAvatar}></AvatarSelector>*/}
				<AvatarSelector selectAvatar={imgname => {
					this.setState({
						avatar: imgname
					})
				}}></AvatarSelector>
				<InputItem onChange={(v) => this.onChange('title', v)}>招聘职位</InputItem>
				<InputItem onChange={(v) => this.onChange('company', v)}>公司名称</InputItem>
				<InputItem onChange={(v) => this.onChange('money', v)}>职位薪资</InputItem>
				<TextareaItem
					title='职位要求'
					autoHeight
					row={3}
					onChange={(v) => this.onChange('desc', v)}></TextareaItem>
				<Button type="primary" onClick={() => {this.props.update(this.state)}}>保存</Button>
			</div>
		)
	}
}
export default BossInfo
