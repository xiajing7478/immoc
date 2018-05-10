import axios from 'axios'
import io from 'socket.io-client'
const socket = io('ws://localhost:9093')

const MSG_LIST = 'MSG_LIST'
const MSG_RECV = 'MSG_RECV'
// const MSG_READ = 'MSG_READ'

const initState = {
	chatmsg: [],
	users: {},
	unread: 0
}

export function chat(state = initState, action) {
	switch (action.type) {
		case MSG_LIST:
			return {...state, users: action.payload.users, chatmsg: action.payload.msgs,
				unread: action.payload.msgs.filter(v => !v.read && v.to === action.payload.userid).length }
		case MSG_RECV:
			const n = action.payload.to === action.payload.userid ? 1 : 0
			return {...state, chatmsg:[ ...state.chatmsg, action.payload ],
				unread: state.unread + n}
		// case MSG_READ:
		default:
			return initState
	}
}

export function sendMsg({from ,to, msg}) {
	return dispatch => {
		socket.emit('sendmsg', { from, to, msg })
	}
}

export function reciveMsg() {
	return (dispatch, getState) => {
		socket.on('reciveMsg', function (data) {
			// debugger
			// console.log('reciveMsg', data)
			const userid = getState().user._id
			dispatch(msgRecv(data, userid))
		})
	}
}

export function getMsgList() {
	return (dispatch, getState) => {
		axios.get('/user/getMsgList').then(res => {
			if (res.status === 200 && res.data.code === 0) {
				const userid = getState().user._id
				// console.log('getState', getState())
				dispatch(msgList(res.data.msgs, res.data.users, userid))
			}
		})
	}
}

function msgRecv(data, userid) {
	return { type:MSG_RECV, payload: { data, userid} }
}

function msgList(msgs, users, userid) {
	return { type:MSG_LIST, payload: { msgs, users, userid } }
}
