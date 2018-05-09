import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { getList } from '../../reduxs/lists.redux'
import UserCard from '../userCard/userCard'
@connect(
	state => state.lists,
	{ getList }
)
class Boss extends Component{
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		data: []
	// 	}
	// }
	componentDidMount() {
		this.props.getList('genuis')
		// axios.get('/user/list?type=genuis').then((res) => {
		// 	if (res.data.code === 0) {
		// 		this.setState({data: res.data.data})
		// 	}
		// })
	}
	render() {
		// console.log('this.state.data', this.state)
		return <UserCard userList={this.props.userList}></UserCard>
	}
}

export default Boss
