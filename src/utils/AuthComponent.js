import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../store/user/user.selectors";

const AuthComponent = ({children}) => {
	let isLoggedIn = useSelector(selectIsLoggedIn);


	return (
		<React.Fragment>
			{isLoggedIn || !isLoggedIn ? children : <Navigate to='/login' replace />};
		</React.Fragment>
	)
}

export default AuthComponent