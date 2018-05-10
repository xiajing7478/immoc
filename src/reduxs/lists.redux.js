import axios from 'axios'
const ERROR_MSG = 'ERROR_MSG'
const SUCCESS_MSG = 'SUCCESS_MSG'
const initState = {
	userList: []
}

// reducer
export function lists(state=initState, action) {
	// debugger
	switch(action.type) {
		case SUCCESS_MSG:
			return { ...state, userList:action.payload }
		case ERROR_MSG:
			return { ...state, userList:action.payload }
		default:
			return state
	}
}

// actions
export function getList(type) {
	// debugger
	return dispatch => {
		axios.get('/user/list?type='+type).then((res) => {
			if (res.status === 200 && res.data.code === 0) {
				dispatch(successData(res.data.data))
			} else {
				dispatch(errMsgData(res.data.msg))
			}
		})
	}
}

function successData(data) {
	// debugger
	return { type: 'SUCCESS_MSG', payload: data}
}

function errMsgData(data) {
	return { type: 'ERROR_MSG', payload: data}
}

