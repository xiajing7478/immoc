import axios from 'axios'
import { getRedirectPath } from '../utils/utils'
// const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const UPDATE_USER = 'UPDATE_USER'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
// state
const initState = {
	redirectTo: '',
	msg: '',
	// isAuth: false,
	username: '',
	// pwd: '',
	type: ''
}

// reducer
export function user(state=initState, action) {
	switch(action.type) {
		// case LOGIN_SUCCESS:
		// 	return { ...state, msg:'', redirectTo:getRedirectPath(action.payload), isAuth: true, ...action.payload}
		// case REGISTER_SUCCESS:
		// 	return { ...state, msg:'', redirectTo:getRedirectPath(action.payload), isAuth: true, ...action.payload}
		case ERROR_MSG:
			return { ...state, msg:action.msg, isAuth:false}
		case LOAD_DATA:
			return { ...state, ...action.payload}
		case AUTH_SUCCESS:
			return { ...state, msg:'', redirectTo:getRedirectPath(action.payload), ...action.payload}
		default:
			return state
	}
	return state
}

// action
export function login({ username, pwd }) {
	if (!username || !pwd) {
		return errMsg('用户名密码必须输入')
	}
	return dispatch => {
		axios.post('/user/login', { username, pwd }).then((res) => {
			if (res.status === 200 && res.data.code === 0 ) {
				dispatch(authSuccess(res.data.data))
			} else {
				dispatch(errMsg(res.data.msg))
			}
		})
	}
}

export function update(data) {
	return dispatch => {
		axios.post('/user/update', data).then((res) => {
			if (res.status === 200 && res.data.code === 0 ) {
				dispatch(authSuccess(res.data.data))
			} else {
				dispatch(errMsg(res.data.msg))
			}
		})
	}
}

export function register({ username, pwd, repeatPwd, type}) {
	if (!username || !pwd || !type) {
		return errMsg('用户名密码必须输入')
	}
	if( pwd !== repeatPwd) {
		return errMsg('密码和确认密码不相同')
	}
	return dispatch => {
		axios.post('/user/register', { username, pwd, type }).then((res) => {
			if (res.status === 200 && res.data.code === 0) {
				dispatch(authSuccess({ username, pwd, type }))
			} else {
				dispatch(errMsg(res.data.msg))
			}
		})
	}
}

export function loadData(userinfo) {
	// debugger
	return { type: LOAD_DATA, payload: userinfo}
}

// export function update(userinfo) {
// 	return { type: UPDATE_USER, payload: userinfo}
// }

// function registerSuccess(data) {
// 	return { type: REGISTER_SUCCESS, payload: data}
// }
//
// function loginSuccess(data) {
// 	return { type: LOGIN_SUCCESS, payload: data}
// }

function authSuccess(obj) {
	const { pwd, ...data } = obj
	return { type: AUTH_SUCCESS, payload: data}
}

function errMsg(msg) {
	return { msg, type: ERROR_MSG }
}
