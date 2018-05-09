import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
@withRouter
class UserCard extends React.Component{
	handleClick(v) {
		console.log(this.props)
		this.props.history.push(`/chat/${v.username}`)
	}
	render(){
		return (
			<WingBlank>
				<WhiteSpace></WhiteSpace>
				{this.props.userList.map( v =>(
					<Card
						onClick={()=> this.handleClick(v)}
						key={v._id}
						style={{'marginBottom': 15}}
					>
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
				<WhiteSpace></WhiteSpace>
			</WingBlank>
		)
	}
}
export default UserCard
