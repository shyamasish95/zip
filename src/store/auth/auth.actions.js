import axios from "axios";
import * as ActionTypes from "./auth.types";

const loginProcessing = () => {
	return {
		type: ActionTypes.AUTH_SIGN_IN_LOADING,
		payload: ""
	};
};
const loginError = () => {
	return {
		type: ActionTypes.AUTH_SIGN_IN_ERROR,
		payload: ""
	};
};
const loginSuccess = content => {
	return {
		type: ActionTypes.AUTH_SIGN_IN_SUCCESS,
		payload: content
	};
};
export const handleLogin = (creds) => async (dispatch) => {

	try {
		const res = await axios.post('https://reqres.in/api/login', creds)

		dispatch({
			type: ActionTypes.AUTH_SIGN_IN_SUCCESS,
			payload: res.data
		})

		return res.data
	} catch (e) {
		console.log(e.message)
	}
}