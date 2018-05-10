import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
@withRouter
@connect(
	state => state.chat
)
class NavLink extends Component{
	static propTypes = {
		data: PropTypes.array.isRequired
	}
	render(){
		const { pathname } = this.props.location
		const navList = this.props.data.filter( v => !v.hide)
		// console.log(navList)
		return (
			<TabBar style={{ height: 50 }}>
				{navList.map(v => (
					<TabBar.Item
						badge= {v.path === '/msg' ? this.props.unread : 0}
						key= {v.path}
						title= {v.text}
						icon= {{uri: require(`./imgs/${v.icon}.png`)}}
						selectedIcon = {{uri: require(`./imgs/${v.icon}-active.png`)}}
						selected= {pathname === v.path}
						onPress={() => {
							// debugger
							this.props.history.push(v.path)
						}}
					></TabBar.Item>
				))}
			</TabBar>
		)
	}
}
export default NavLink
