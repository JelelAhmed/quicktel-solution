import inputActionTypes from "./input.types";

export const setInputTitle = (text) => ({
	type: inputActionTypes.SET_INPUT_TITLE,
	payload: text
});

export const setInputBody = (text) => ({
	type: inputActionTypes.SET_INPUT_BODY,
	payload: text
});