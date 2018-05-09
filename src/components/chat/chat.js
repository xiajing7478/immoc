import React from 'react'
import io from 'socket.io-client'
import { List, InputItem } from 'antd-mobile'
const socket = io('ws://localhost:9093')

class Chat extends React.Component{
	constructor(props) {
		super(props)
		this.state= {text:'', msg: []}
	}
	componentDidMount() {
		socket.on('reciveMsg', (data) => {
			this.setState({
				msg:[...this.state.msg, data.text]
			})
		})
	}
	handleSubmit() {
		socket.emit('sendmsg', {text:this.state.text})
		// console.log(this.state)
		this.setState({text:''})
	}
	render(){
		return (
			<div>
				{this.state.msg.map(v => {
					return <p key={v}>{v}</p>
				})}
				<List>
					<InputItem value={this.state.text}
						onChange={v => {this.setState({text:v})}}
						extra={<span onClick={()=>{this.handleSubmit()}}>发送</span>}>信息</InputItem>
				</List>
				<h2>chat with user:{this.props.match.params.username}</h2>
			</div>
		)
	}
}
export default Chat
