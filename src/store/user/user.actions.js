import userActionTypes from "./user.type";
import QuicktelApi from "../../api/api";


export const setCurrentUser = (url, body) => (dispatch) => {
	dispatch({ type: userActionTypes.SET_USER_PENDING })
	QuicktelApi.post(url, body)
		.then(data => dispatch({type: userActionTypes.SET_USER_SUCCESS, payload: data}))
		.catch(error => dispatch({type: userActionTypes.SET_USER_FAILED, payload: error}))
}

export const getCurrentUser = (url) => (dispatch) => {
	dispatch({ type: userActionTypes.GET_USER_PENDING })
	QuicktelApi.get(url)
		.then(data => dispatch({type: userActionTypes.GET_USER_SUCCESS, payload: data}))
		.catch(error => dispatch({type: userActionTypes.GET_USER_FAILED, payload: error}))
}



export const logoutUser = () => ({
	type: userActionTypes.LOGOUT_USER
})


export const toggleLogoutHidden = () => ({
	type: userActionTypes.TOGGLE_LOGOUT_HIDDEN,
});