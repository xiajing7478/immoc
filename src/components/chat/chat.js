import React from 'react'
import { List, InputItem, NavBar, Icon  } from 'antd-mobile'
import { connect } from 'react-redux'
import { getMsgList, sendMsg, reciveMsg } from '../../reduxs/chat.redux'
import { getChatId } from "../../utils/utils"
// import io from 'socket.io-client'
// const socket = io('ws://localhost:9093')
@connect(
	state => state,
	{ getMsgList, sendMsg, reciveMsg }
)
class Chat extends React.Component{
	constructor(props) {
		super(props)
		this.state= {text:'', msg: []}
	}
	componentDidMount() {
		// socket.on('reciveMsg', (data) => {
		// 	this.setState({
		// 		msg:[...this.state.msg, data.text]
		// 	})
		// })
		if (!this.props.chat.chatmsg.length) {
			this.props.getMsgList()
			this.props.reciveMsg()
		}
	}
	handleSubmit() {
		const from = this.props.user._id
		const to = this.props.match.params.userid
		const msg = this.state.text
		this.props.sendMsg({ from, to, msg })
		this.setState({text:''})
	}
	render(){
		// debugger
		const userid = this.props.match.params.userid
		const Item = List.Item
		const users = this.props.chat.users
		const chatid = getChatId(userid, this.props.user._id)
		const chatMsgs = this.props.chat.chatmsg.filter(v => v.chatid === chatid)
		if(!users[userid]){
			return null
		}
		return (
			<div id='chat-page'>
				<NavBar mode='dark'
	        icon={<Icon type="left" />}
          onLeftClick={() => {this.props.history.goBack()}}>
					{users[userid].username}
				</NavBar>
				{chatMsgs.map(v => {
					const avatar = require(`../../assets/imgs/${users[v.from].avatar}.png`)
					return v.from === userid ? (
						<List key={v._id}>
							<Item
								thumb={avatar}
							>{v.content}</Item>
						</List>
						// <p key={v._id}>对方发来的：{v.content}</p>
					) : (
						<List key={v._id}>
							<Item
								className='chat-me'
								extra={<img src={avatar} alt='pic' />}
							>{v.content}</Item>
						</List>
						// <p key={v._id}>我发来:{v.content}</p>
					)
				})}
				<List>
					<InputItem value={this.state.text}
						onChange={v => {this.setState({text:v})}}
						extra={<span onClick={()=>{this.handleSubmit()}}>发送</span>}>信息</InputItem>
				</List>
				{/*<h2>chat with user:{this.props.match.params.username}</h2>*/}
			</div>
		)
	}
}
export default Chat
