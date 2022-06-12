import { createSelector } from "reselect";

const selectUser = state => state.user;


export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.user
);

export const selectUserId = createSelector(
	[selectCurrentUser],
	(user) => user.id
);



export const selectIsLoggedIn = createSelector(
	[selectUser],
	(user) => user.isLoggedIn
);

export const selectUserSuccess = createSelector(
	[selectUser],
	(user) => user.userSuccess
);

export const selectUserError = createSelector(
	[selectUser],
	(user) => user.userError
);

export const selectVerified = createSelector(
	[selectUser],
	(user) => user.verified
);

export const selectUserFeedback = createSelector(
	[selectUser],
	(user) => user.userFeedback
);

export const selectIsHidden = createSelector(
	[selectUser],
	(user) => user.isHidden
);

export const selectUserFirstName = createSelector(
	[selectUser],
	(user) => user.firstName
);

export const selectUserLastName = createSelector(
	[selectUser],
	(user) => user.lastName
);

export const selectVerifyToken = createSelector(
	[selectUser],
	(user) => user.verifyToken
);


export const selectVerifyMessage = createSelector(
	[selectUser],
	(user) => user.verifyMessage
);




