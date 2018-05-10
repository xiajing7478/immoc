import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { getList } from '../../reduxs/lists.redux'
import UserCard from '../userCard/userCard'
@connect(
	state => state.lists,
	{ getList }
)
class Genuis extends Component{
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		data: []
	// 	}
	// }
	componentDidMount() {
		if (!this.props.userList.length) {
			this.props.getList('boss')
		}
		// axios.get('/user/list?type=boss').then((res) => {
		// 	if (res.data.code === 0) {
		// 		this.setState({data: res.data.data})
		// 	}
		// })
	}
	render() {
		// {this.state.data.map( v =>(
		// console.log('this.state.data', this.state)
		return (
			<UserCard userList={this.props.userList}></UserCard>
		)
	}
}

export default Genuis
