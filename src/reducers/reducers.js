// 合并所有多个reducers，并且返回
import { combineReducers } from 'redux'
import { user } from '../reduxs/user.redux'
import { lists } from '../reduxs/lists.redux'
export default combineReducers({ user, lists })


// import { Counter } from './index.redux'
// import { auth } from './Auth/Auth.redux'
// export default combineReducers({Counter, auth})

