import { createStore } from 'redux'

/**
 * 通过reducer
 * 根据老的state和action 生成新的state
 */
function Counter(state, action) {
	switch(action.type) {
		case '加机关枪':
			return state + 1
		case '减机关枪':
			return state - 1
		default:
			return 10
	}
}
// 1.新建store
const store = createStore(Counter)

const init = store.getState()
console.log(init)
