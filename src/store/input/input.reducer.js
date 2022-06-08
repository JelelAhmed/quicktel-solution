import inputActionTypes from "./input.types";

const INITIAL_STATE = {
	title: '',
	body: ''
}



const inputReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case inputActionTypes.SET_INPUT_TITLE:
			return {
				...state,
				title: action.payload
			}
		
			case inputActionTypes.SET_INPUT_BODY:
			return {
				...state,
				body: action.payload
			}
			
		default: 
			return state;
	}
}

export default inputReducer;