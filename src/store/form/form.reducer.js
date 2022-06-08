import formActionTypes from "./form.types";


const INITIAL_STATE = {
	showPassword: false,
	password: '',
	email: '',
	lastName: '',
	firstName: '',

	isMin: false,


	formIsValid: false,
	validation: {
		password: {
			isNumber: false,
			isUppercase: false,
			isSymbol: false,
			isMinlength: false
		},

		email: {
			isEmail: false
		}
	}
}

const formReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case formActionTypes.SET_INPUT_TYPE: 
			return {
				...state,
				showPassword: action.payload
			}
			
		case formActionTypes.SET_INPUT_FIRSTNAME:
			return {
				...state,
				firstName: action.payload
			}

		case formActionTypes.SET_INPUT_LASTNAME:
			return {
				...state,
				lastName: action.payload
			}
		
		case formActionTypes.SET_INPUT_PASSWORD:
			return {
				...state,
				password: action.payload
			}
		
		case formActionTypes.SET_INPUT_EMAIL:
			return {
				...state,
				email: action.payload
			}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///////////////////Form Validation/////////////////////////////////////////
		
		case formActionTypes.FORM_VALIDITY:
					return {
						...state,
						formIsValid: action.payload
					}



		case formActionTypes.PASSWORD_CONTAINS_MINLENGTH:
			return {
				...state,
				validation: {
					...state.validation,
					password: {
						...state.validation.password,
							isMinlength: action.payload,
					}
				}
			}
			
		case formActionTypes.PASSWORD_CONTAINS_NUMBER:
			return {
				...state,
				validation: {
					...state.validation,
					password: {
						...state.validation.password,
							isNumber: action.payload,
					}
				}
			}

		
		case formActionTypes.PASSWORD_CONTAINS_UPPERCASE:
			return {
				...state,
				validation: {
					...state.validation,
					password: {
						...state.validation.password,
							isUppercase: action.payload,
					}
				}
			}

		case formActionTypes.PASSWORD_CONTAINS_SYMBOL:
			return {
				...state,
				validation: {
					...state.validation,
					password: {
						...state.validation.password,
							isSymbol: action.payload,
					}
				}
			}

		case formActionTypes.EMAIL_VALIDATION_CHECK:
			return {
				...state,
				validation: {
					...state.validation,
					email: {
						...state.validation.email,
							isEmail: action.payload,
					}
				}
			}

		case formActionTypes.CLEAR_FORM_FIELDS:
			return INITIAL_STATE

			
		default:
			return state;
	}
};

export default formReducer;