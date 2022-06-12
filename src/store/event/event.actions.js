import QuicktelApi from "../../api/api";
import noteActionTypes from "./event.types";

export const toggleCreateEvent = () => ({
	type: noteActionTypes.TOGGLE_ADD_NOTE,
});


// export const getSavedEvents = (url, params) => (dispatch) => {
// 	dispatch({ type: eventActionTypes.GET_EVENT_PENDING })
// 	WazobiaClient.get(url, params)
// 	.then(data => dispatch({type: eventActionTypes.GET_EVENT_SUCCESS, payload: data}))
// 	.catch(error => dispatch({type: eventActionTypes.GET_EVENT_FAILED, payload: error}))
// }


export const addNoteItem = (url, body) => (dispatch) => {
	dispatch({ type: noteActionTypes.ADD_NOTE_PENDING })
	QuicktelApi.post(url, body)
	.then(data => dispatch({type: noteActionTypes.ADD_NOTE_SUCCESS, payload: data}))
	.catch(error => dispatch({type: noteActionTypes.ADD_NOTE_FAILED, payload: error}))
}


