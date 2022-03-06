import { CONNECT } from '../actions/constants'

const authReducer = (state = {connected: false}, action) => {
	switch (action.type) {
		case CONNECT:
			return {...state, connected: true }
		default:
			return state;

	}
}

export default authReducer