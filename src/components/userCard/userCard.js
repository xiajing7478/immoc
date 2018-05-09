import React, { Component } from 'react'
import { Card, WingBlank } from 'antd-mobile'
class UserCard extends Component{
	render(){
		return (
			<WingBlank>
				{this.props.userList.map( v =>(
					<Card key={v._id}>
						<Card.Header
							title={v.user}
							thumb={require(`../../assets/imgs/${v.avatar}.png`)}
							extra={<span>{v.title}</span>}
						></Card.Header>
						<Card.Body>
							{v.type === 'boss' ? <div>公司:{v.company}</div> :null}
							{v.desc.split('\n').map(d => (
							<div key={d}>{d}</div>
							))}
							{v.type === 'boss' ? <div>薪资:{v.money}</div> :null}
						</Card.Body>
					</Card>
				))}
			</WingBlank>
		)
	}
}
export default UserCard
