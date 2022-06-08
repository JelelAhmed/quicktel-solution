import { createSelector } from "reselect";

const selectForm = state => state.form;


export const selectShowPassword = createSelector(
	[selectForm],
	(form) => form.showPassword
);



export const selectFirstName = createSelector(
	[selectForm],
	(form) => form.firstName
);

export const selectLastName = createSelector(
	[selectForm],
	(form) => form.lastName
);


export const selectPassword = createSelector(
	[selectForm],
	(form) => form.password
);

export const selectEmail = createSelector(
	[selectForm],
	(form) => form.email
);




export const selectFormValidity = createSelector(
	[selectForm],
	(form) => form.formIsValid
);

export const selectIsEmail = createSelector(
	[selectForm],
	(form) => form.validation.email.isEmail
);


const selectPasswordValidations = createSelector(
	[selectForm], 
	(form) => form.validation.password
);

export const selectIsNumber = createSelector(
	[selectPasswordValidations],
	(password) => password.isNumber
);

export const selectIsSymbol = createSelector(
	[selectPasswordValidations],
	(password) => password.isSymbol
);

export const selectIsMinLength = createSelector(
	[selectPasswordValidations],
	(password) => password.isMinlength
);

export const selectIsUppercase = createSelector(
	[selectPasswordValidations],
	(password) => password.isUppercase
);