import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserId } from "../store/user/user.selectors";

const AuthComponent = ({children}) => {

	const userId = useSelector(selectUserId)

	return (
		<React.Fragment>
			{userId ? children : <Navigate to='/login' replace />};
		</React.Fragment>
	)
}

export default AuthComponent