import { createSelector } from "reselect";

const selectUser = state => state.user;


export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.user
);

export const selectUserId = createSelector(
	[selectUser],
	(user) => user.userId
);

export const selectIsLoggedIn = createSelector(
	[selectUser],
	(user) => user.isLoggedIn
);

export const selectIsHidden = createSelector(
	[selectUser],
	(user) => user.isHidden
);

export const selectUserFirstName = createSelector(
	[selectCurrentUser],
	(user) => user.firstName
);

export const selectUserLastName = createSelector(
	[selectCurrentUser],
	(user) => user.lastName
);



