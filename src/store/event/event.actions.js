import { WazobiaClient } from "../../api/api";
import eventActionTypes from "./event.types";


export const toggleCreateEvent = () => ({
	type: eventActionTypes.TOGGLE_CREATE_EVENT,
});

export const toggleUpdateEvent = (event) => ({
	type: eventActionTypes.TOGGLE_UPDATE_EVENT,
	payload: event
});

export const toggleDeleteEvent = (event) => ({
	type: eventActionTypes.TOGGLE_DELETE_EVENT,
	payload: event
});


export const getSavedEvents = (url, params) => (dispatch) => {
	dispatch({ type: eventActionTypes.GET_EVENT_PENDING })
	WazobiaClient.get(url, params)
	.then(data => dispatch({type: eventActionTypes.GET_EVENT_SUCCESS, payload: data}))
	.catch(error => dispatch({type: eventActionTypes.GET_EVENT_FAILED, payload: error}))
}


export const createEventItem = (url, body) => (dispatch) => {
	dispatch({ type: eventActionTypes.CREATE_EVENT_PENDING })
	WazobiaClient.post(url, body)
	.then(data => dispatch({type: eventActionTypes.CREATE_EVENT_SUCCESS, payload: data}))
	.catch(error => dispatch({type: eventActionTypes.CREATE_EVENT_FAILED, payload: error}))
}

export const updateEventItem = (url, event) => (dispatch) => {
	dispatch({ type: eventActionTypes.UPDATE_EVENT_PENDING })
	WazobiaClient.put(url, event)
	.then(data => dispatch({type: eventActionTypes.UPDATE_EVENT_SUCCESS, payload: data}))
	.catch(error => dispatch({type: eventActionTypes.UPDATE_EVENT_FAILED, payload: error}))
}

export const deleteEventItem = (url, event) => (dispatch) => {
	dispatch({ type: eventActionTypes.DELETE_EVENT_PENDING })
	WazobiaClient.delete(url, event)
	.then(data => dispatch({type: eventActionTypes.DELETE_EVENT_SUCCESS, payload: data}))
	.catch(error => dispatch({type: eventActionTypes.DELETE_EVENT_FAILED, payload: error}))
}


