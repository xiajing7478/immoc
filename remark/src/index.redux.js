const ADD_GUN = 'ADD_GUN'
const REMOVE_GUN = 'REMOVE_GUN'
// reducer
export function Counter(state, action) {
	switch(action.type) {
		case 'ADD_GUN':
			return state + 1
		case 'REMOVE_GUN':
			return state - 1
		default:
			return 10
	}
}

export function addGun() {
	return { type: ADD_GUN }
}
export function removeGun() {
	return { type: REMOVE_GUN }
}
export function addGunAsync() {
	return dispatch => {
		setTimeout(()=>{
			dispatch({ type: ADD_GUN })
			// dispatch(addGun())
		}, 2000)
	}
}
