import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
// import PropTypes from 'prop-types'
class AvatarSelector extends Component{
	// static propTypes = {
	// 	selectAvatar: propTypes.func
	// }
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	render(){
		const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'.split(',')
		.map(v => ({
			icon: require(`../../assets/imgs/${v}.png`),
			text: v
		}))
		const gridHeader = this.state.icon ? (<div><span>
			已选择的头像
			<img src={this.state.icon} alt='pic' />
		</span></div>): <div>请选择头像</div>
		return(
			<div>
				{gridHeader}
				<Grid data={avatarList} onClick={elm=>{
					this.setState(elm)
					this.props.selectAvatar(elm.text)}}></Grid>
			</div>
		)
	}
}
export default AvatarSelector
