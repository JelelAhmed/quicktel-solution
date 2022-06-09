import userActionTypes from "./user.type";
import { WazobiaClient } from "../../api/api";



export const setCurrentUser = (url, body) => (dispatch) => {
	dispatch({ type: userActionTypes.SET_USER_PENDING })
	WazobiaClient.post(url, body)
		.then(data => dispatch({type: userActionTypes.SET_USER_SUCCESS, payload: data}))
		.catch(error => dispatch({type: userActionTypes.SET_USER_FAILED, payload: error}))
}

export const getCurrentUser = (url) => (dispatch) => {
	dispatch({ type: userActionTypes.GET_USER_PENDING })
	WazobiaClient.get(url)
		.then(data => dispatch({type: userActionTypes.GET_USER_SUCCESS, payload: data}))
		.catch(error => dispatch({type: userActionTypes.GET_USER_FAILED, payload: error}))
}


export const resendVerificationEmail = (url) => (dispatch) => {
	dispatch({ type: userActionTypes.RESEND_VERIFICATION_PENDING })
	WazobiaClient.post(url)
		.then(data => dispatch({type: userActionTypes.RESEND_VERIFICATION_SUCCESS, payload: data}))
		.catch(error => dispatch({type: userActionTypes.RESEND_VERIFICATION_FAILED, payload: error}))
}

export const verifyUser = (url, body) => (dispatch) => {
	dispatch({ type: userActionTypes.VERIFY_USER_PENDING })
	WazobiaClient.post(url, body)
		.then(data => dispatch({type: userActionTypes.VERIFY_USER_SUCCESS, payload: data}))
		.catch(error => dispatch({type: userActionTypes.VERIFY_USER_FAILED, payload: error}))
}





export const logoutUser = () => ({
	type: userActionTypes.LOGOUT_USER
})


export const toggleLogoutHidden = () => ({
	type: userActionTypes.TOGGLE_LOGOUT_HIDDEN,
});