import userActionTypes from "./user.type";


const INITIAL_STATE = {
	isPending: false,

	user: null,
	firstName: '',
	lastName: '',

	isLoggedIn: false,
	error: null,
	loginErr: false,

	isHidden: true,
	
	userSuccess: false,
	userError: false, 
	userFeedback: '',

	

};

////////////////////////////////////////////////
///////Handler for Expired Tokens;





const userReducer = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.SET_USER_PENDING:
				return {...state, isPending: true}
				
		case userActionTypes.SET_USER_SUCCESS:
			return {
				...state, 
				isPending: false,
				user: action.payload.data.data.createUser,
				isLoggedIn: true
			}
						
		case userActionTypes.SET_USER_FAILED: 
			return {
				...state, 
				error: action.payload,
				isPending: false,
				isLoggedIn: false
			}


		case userActionTypes.GET_USER_PENDING:
			return {...state, isPending: true}

				
		case userActionTypes.GET_USER_SUCCESS:
			return {
				...state, 
				isPending: false,
				user: action.payload.data.user,
				firstName: action.payload.data.user.first_name,
				lastName: action.payload.data.user.last_name,
				email: action.payload.data.user.email,
				verifyToken: action.payload.data.user.email_verification_token,
				verified: action.payload.data.user.email_verified_at,
				isLoggedIn: true
			}
							
		case userActionTypes.GET_USER_FAILED: 
			return {
				...state, 
				error: action.payload,
				loginErr: true, 
				isPending: false,
			}

		case userActionTypes.RESEND_VERIFICATION_PENDING: 
			return {
				...state, 
				isPending: true,
			}

		case userActionTypes.RESEND_VERIFICATION_SUCCESS: 
			return {
				...state, 
				userFeedback: action.payload.data.message,
				userSuccess: true,
				isPending: false,
			}

		case userActionTypes.RESEND_VERIFICATION_FAILED: 
			return {
				...state, 
				userFeedback: action.payload.data,
				userError: true,
				isPending: false,
			}


			case userActionTypes.VERIFY_USER_PENDING: 
			return {
				...state, 
				isPending: true,
			}

		case userActionTypes.VERIFY_USER_SUCCESS: 
			return {
				...state, 
				verifyMessage: action.payload.data.message,
				verified: true,
				userSuccess: true,
				isPending: false,
			}

		case userActionTypes.VERIFY_USER_FAILED: 
			return {
				...state, 
				verifyMessage: action.payload.data.message,
				verified: false,
				userError: true,
				isPending: false,
			}

		

			case userActionTypes.TOGGLE_LOGOUT_HIDDEN: 
			return {
				...state, 
				isHidden: !state.isHidden
			}

			case userActionTypes.LOGOUT_USER: 
			return {
				...state,
				isLoggedIn: false,
			}

		default: 
			return state;
	  }
};

export default userReducer;