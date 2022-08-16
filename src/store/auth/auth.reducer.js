// Note: Do not update/change the initial state
import * as ActionTypes from './auth.types'
const token = localStorage.getItem('token') || ''
export const authInitalState = {
	loading: false,
	data: {
		token: "",
		isAuthenticated: false,
	},
	error: false,
};
const reduceLoginStart = (state, action) => {
	return { ...state, loading: true }
}
const reduceLoginSuccess = (state, action) => {
	localStorage.setItem('token', action.payload.token)
	console.log({ ...state, data: { ...state.data, isAuthenticated: true, token: action.payload.token }, error: false, loading: false })
	return { ...state, data: { ...state.data, isAuthenticated: true, token: action.payload.token }, error: false, loading: false }
}
const reduceLoginFailure = (state, action) => {
	return { ...state, data: { ...state.data, isAuthenticated: false }, error: true, loading: false }
}

export const authReducer = (state = authInitalState, action) => {
	switch (action.type) {
		case ActionTypes.AUTH_SIGN_IN_LOADING:
			reduceLoginStart(state, action);
			break;
		case ActionTypes.AUTH_SIGN_IN_SUCCESS:
			reduceLoginSuccess(state, action);
			break;
		case ActionTypes.AUTH_SIGN_IN_ERROR:
			reduceLoginFailure(state, action);
			break;
		default:
			return state;
	}
};
