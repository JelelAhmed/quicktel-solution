import QuicktelApi from "../../api/api";
import noteActionTypes from "./note.types";

export const toggleCreateEvent = () => ({
	type: noteActionTypes.TOGGLE_ADD_NOTE,
});


export const getSavednotes = (url, params) => (dispatch) => {
	dispatch({ type: noteActionTypes.GET_NOTE_PENDING })
	QuicktelApi.post(url, params)
	.then(data => dispatch({type: noteActionTypes.GET_NOTE_SUCCESS, payload: data}))
	.catch(error => dispatch({type: noteActionTypes.GET_NOTE_FAILED, payload: error}))
}


export const addNoteItem = (url, body) => (dispatch) => {
	dispatch({ type: noteActionTypes.ADD_NOTE_PENDING })
	QuicktelApi.post(url, body)
	.then(data => dispatch({type: noteActionTypes.ADD_NOTE_SUCCESS, payload: data}))
	.catch(error => dispatch({type: noteActionTypes.ADD_NOTE_FAILED, payload: error}))
}


