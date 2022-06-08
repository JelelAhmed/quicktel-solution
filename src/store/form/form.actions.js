import formActionTypes from "./form.types";

export const setInputType = (text) => ({
	type: formActionTypes.SET_INPUT_TYPE,
	payload: text
});

export const setInputPassword = (text) => ({
	type: formActionTypes.SET_INPUT_PASSWORD,
	payload: text
}) 

export const setInputLastName = (text) => ({
	type: formActionTypes.SET_INPUT_LASTNAME,
	payload: text
});

export const setInputEmail = (text) => ({
	type: formActionTypes.SET_INPUT_EMAIL,
	payload: text
});

export const setInputFirstName = (text) => ({
	type: formActionTypes.SET_INPUT_FIRSTNAME,
	payload: text
});




export const containsUppercase = (text) => ({
	type: formActionTypes.PASSWORD_CONTAINS_UPPERCASE,
	payload: text
});

export const containsNumber = (text) => ({
	type: formActionTypes.PASSWORD_CONTAINS_NUMBER,
	payload: text
});

export const containsSymbol = (text) => ({
	type: formActionTypes.PASSWORD_CONTAINS_SYMBOL,
	payload: text
});

export const containsMinlength = (boolean) => ({
	type: formActionTypes.PASSWORD_CONTAINS_MINLENGTH,
	payload: boolean
});

export const emailValidation = (boolean) => ({
	type: formActionTypes.EMAIL_VALIDATION_CHECK,
	payload: boolean
});

export const formValidation = (boolean) => ({
	type: formActionTypes.FORM_VALIDITY,
	payload: boolean
});

export const clearFormfields = () => ({
	type: formActionTypes.CLEAR_FORM_FIELDS
});
