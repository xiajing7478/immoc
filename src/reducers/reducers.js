// 合并所有多个reducers，并且返回
import { combineReducers } from 'redux'
import { user } from '../reduxs/user.redux'
export default combineReducers({user})


// import { Counter } from './index.redux'
// import { auth } from './Auth/Auth.redux'
// export default combineReducers({Counter, auth})

