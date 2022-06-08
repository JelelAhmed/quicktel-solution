import { createSelector } from "reselect";

const selectInput = state => state.input;

export const selectInputTitle = createSelector(
	[selectInput],
	(input) => input.title
);

export const selectInputBody = createSelector(
	[selectInput],
	(input) => input.body
);