import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserId } from "../store/user/user.selectors";

const AuthComponent = ({children}) => {

	const user = useSelector(selectUserId)

	let userId = null;

	if(user) {
		userId = user.id 
	}

	return (
		<React.Fragment>
			{user ? children : <Navigate to='/login' replace />};
		</React.Fragment>
	)
}

export default AuthComponent