import noteActionTypes from "./note.types";


const INITIAL_STATE = {
	notes: [],
	noteAdd: null,
	isPending: true,
	addIsPending: false,
	isAdd: false,
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

		
		case noteActionTypes.ADD_NOTE_PENDING: 
			return {
				...state,
				addIsPending: true,
			}

	
		case noteActionTypes.ADD_NOTE_SUCCESS: 
			return {
				...state,
				noteAdd: action.payload.data.data.addNote,
				addIsPending: false,

			}

		case noteActionTypes.ADD_NOTE_FAILED: 
			return {
				...state,
				isError: true,
				addIsPending: false,

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