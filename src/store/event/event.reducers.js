import eventActionTypes from "./event.types";

const INITIAL_STATE = {
	events: [],
	isPending: true,


	eventToUpdate: null,
	isUpdate: false,
	updatePending: false,
	updateResponse: [],

	eventToDelete: null,
	isDelete: false,
	deletePending: false,
	deleteResponse: [],


	isCreate: false,
	createPending: true,
	eventItem: [],

	feedbackMessage: '',
	isError: false,
	isSuccess: false
	
	
};

const eventReducer = (state = INITIAL_STATE, action ) => {
	switch (action.type) {

		case eventActionTypes.GET_EVENT_SUCCESS:
			return {
				...state, 
				events: action.payload.data.items,
				isPending: false
			}
							
		case eventActionTypes.GET_EVENT_FAILED: 
			return {
				...state, 
				feedbackMessage: action.payload.response.data.message,
				isError: true,
				isPending: false,
			}



		case eventActionTypes.TOGGLE_CREATE_EVENT:
			return {
				...state,
				isCreate: !state.isCreate
			}
		
		case eventActionTypes.TOGGLE_UPDATE_EVENT:
			return {
				...state,
				isUpdate: !state.isUpdate,
				eventToUpdate: action.payload
			}
		
		case eventActionTypes.TOGGLE_DELETE_EVENT:
		return {
			...state,
			isDelete: !state.isDelete,
			eventToDelete: action.payload
		}

		case eventActionTypes.CREATE_EVENT_SUCCESS: 
			return {
				...state,
				isSuccess: true,
				eventItem: action.payload.data,
				feedbackMessage: action.payload.data.message,
				createPending: false
			}

		case eventActionTypes.CREATE_EVENT_FAILED: 
			return {
				...state,
				eventItem: action.payload.response.data,
				feedbackMessage: action.payload.response.data.message,
				isError: true
			}
	
				
//// Delete Event Reducer Funtions  ///////////////////////
//////////////////////////////////////////////////////////

		case eventActionTypes.DELETE_EVENT_PENDING: 
			return {
				...state,
				deletePending: true
			};

		case eventActionTypes.DELETE_EVENT_SUCCESS: 
			return {
				...state,
				isSuccess: true,
				deleteResponse: action.payload,
				feedbackMessage: action.payload.data.message,
				deletePending: false
			};
		
		case eventActionTypes.DELETE_EVENT_FAILED: 
			return {
				...state,
				isError: true,
				deleteResponse: action.payload,
				deletePending: false,
				feedbackMessage: action.payload.response.data.message,
			};
		

		case eventActionTypes.UPDATE_EVENT_SUCCESS:
			return {
				...state,
				isSuccess: true,
				updateResponse: action.payload.data,
				feedbackMessage: action.payload.data.message,
				updatePending: false
			}

		case eventActionTypes.UPDATE_EVENT_FAILED:
			return {
				...state,
				isError: true,
				updateResponse: action.payload.response.data,
				feedbackMessage: action.payload.response.data.message,
				updatePending: false
			}
			
		case eventActionTypes.UPDATE_EVENT_PENDING:
			return {
				...state,
				updatePending: true
			}


		default: 
			return state;
	}
}

export default eventReducer;