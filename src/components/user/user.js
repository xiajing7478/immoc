import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import browserCookie from 'browser-cookies'
import { logout } from '../../reduxs/user.redux'
import { Redirect } from 'react-router-dom'
@connect(
	state => state.user,
	{ logout }
)
class User extends React.Component {
	constructor(props) {
		super(props)
		this.logout = this.logout.bind(this)
	}
	// componentDidMount() {
	// 	// console.log(this.logout111())
	// }
	logout() {
		const alert = Modal.alert
		alert('注销', '确认退出登录吗?', [
			{ text: 'Cancel', onPress: () => console.log('cancel') },
			{ text: 'OK', onPress: () => {
					browserCookie.erase('userid')
					this.props.logout()
			}}
		])
	}
	render(){
		const props = this.props
		console.log(props)
		const Item = List.Item
		const Brief = Item.Brief
		return props.username?(
			<div>
				<Result
					img={<img src={require(`../../assets/imgs/${props.avatar}.png`)} style={{width:50}} alt="" />}
					title={props.user}
					message={props.type === 'boss'?props.company:null}
				/>
				<List renderHeader={()=>'简介'}>
					<Item multipleLine>
						{props.title}
						{props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
						{props.money?<Brief>薪资:{props.money}</Brief>:null}
					</Item>
				</List>
				<WhiteSpace></WhiteSpace>
				<List>
					<Item type="primary" onClick={this.logout}>退出登录</Item>
				</List>
			</div>
		):null
			// <Redirect to={props.redirectTo} />
	}
}
export default User
