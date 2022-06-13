import userActionTypes from "./user.type";


const INITIAL_STATE = {
	isPending: false,

	user: null,
	userId: null,

	isLoggedIn: false,
	error: null,

	isHidden: true,
	

};


const userReducer = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		
		case userActionTypes.SET_USER_PENDING:
				return {...state, isPending: true}
				
		case userActionTypes.SET_USER_SUCCESS:
			return {
				...state, 
				isPending: false,
				user: action.payload.data.data.createUser,
				userId: action.payload.data.data.createUser.id,
			}
						
		case userActionTypes.SET_USER_FAILED: 
			return {
				...state, 
				error: action.payload,
				isPending: false,
			}



		case userActionTypes.GET_USER_PENDING:
			return {...state, isPending: true}

				
		case userActionTypes.GET_USER_SUCCESS:
			return {
				...state, 
				isPending: false,
				user: action.payload.data.data.loginUser,
				userId: action.payload.data.data.loginUser.id,
				isLoggedIn: false
			}
							
		case userActionTypes.GET_USER_FAILED: 
			return {
				...state, 
				error: action.payload.error,
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