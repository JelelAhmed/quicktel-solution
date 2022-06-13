import noteActionTypes from "./note.types";


const INITIAL_STATE = {
	notes: [],
	noteAdd: null,
	isPending: true,


	eventToUpdate: null,
	isUpdate: false,
	updatePending: false,
	updateResponse: [],

	eventToDelete: null,
	isDelete: false,
	deletePending: false,
	deleteResponse: [],


	isAdd: false,
	createPending: true,
	eventItem: [],

	feedbackMessage: '',
	isError: false,
	isSuccess: false
	
	
};

const noteReducer = (state = INITIAL_STATE, action ) => {
	switch (action.type) {

		case noteActionTypes.GET_NOTE_SUCCESS:
			return {
				...state, 
				notes: action.payload.data.data.getNotes,
				isPending: false
			}
							
		case noteActionTypes.GET_NOTE_FAILED: 
			return {
				...state, 
				feedbackMessage: action.payload.response.data.message,
				isError: true,
				isPending: false,
			}

	
		case noteActionTypes.ADD_NOTE_SUCCESS: 
			return {
				...state,
				noteAdd: action.payload.data.data.addNote
			}

		case noteActionTypes.ADD_NOTE_FAILED: 
			return {
				...state,
				eventItem: action.payload.response.data,
				feedbackMessage: action.payload.response.data.message,
				isError: true
			}

		case noteActionTypes.TOGGLE_ADD_NOTE: 
			return {
				...state,
				isAdd: !state.isAdd
			}

		default: 
			return state;
	}
}

export default noteReducer;