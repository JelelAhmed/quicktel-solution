import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { print } from 'graphql';
import gql from 'graphql-tag';

import { setInputPassword, setInputEmail, formValidation, clearFormfields } from "../../store/form/form.actions";
import { getCurrentUser } from "../../store/user/user.actions";


import { emailValidation } from "../../store/form/form.actions";
import { selectEmail, selectFormValidity, selectIsEmail, selectPassword, selectShowPassword } from "../../store/form/form.selectors";


import CustomButton from "../custom-button.component.js/custom-button.component";
import FormInput from "../form-input.js/form-input.component";

import  './sign-in.styles.scss';

const SignIn = () => {


	const showPassword = useSelector(selectShowPassword);
	const password = useSelector(selectPassword);
	const email = useSelector(selectEmail);
	const validity = useSelector(selectFormValidity);
	const isEmail = useSelector(selectIsEmail);

	const dispatch = useDispatch();

	const	handleSubmitSignIn = async (event) => {
		event.preventDefault();

		const SIGN_IN = gql`
			mutation loginUser($email:String!, $password:String!) {
				loginUser(email:$email, password:$password) { 
					id,
					firstName,
					lastName,
					email,
				}
			}
		`

		dispatch(getCurrentUser('/graphql',{
			query: print(SIGN_IN),
			variables: {
				email: email,
				password: password,
			},
		}))		
	}


	useEffect(() => {
		const validateEmail = () => {
			let validity = true;

			if(!email || !password) {
				validity = false;
			}

			if(email) {
				const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
				const isValid = pattern.test(email);
				dispatch(emailValidation(isValid));
				validity = isValid && validity;
			}
			return validity;
		}

		dispatch(formValidation(validateEmail(email)));
	},[email, password])



	const	handlePasswordChange = (event) => {
		dispatch(setInputPassword(event.target.value))
  }
	
	const	handleEmailChange = (event) => {
		dispatch(setInputEmail(event.target.value))
  }

	let address = 'Email Address';

	return (
		<div className="signin">
			<div className="signin-wrapper">
			  <h2 className="signin-title">Log in</h2>
				<span className="signin-message">If you have no account, <Link onClick={() =>dispatch(clearFormfields())} to={'/register'}>Sign up</Link></span>

				<form onSubmit={handleSubmitSignIn} className="signin-form">
					<FormInput 
						name={'email'}
						label={address} 
						type={'email'}
						onChange={handleEmailChange} 
						placeholder={'Type your email address here'} 
						required />
						<div className={!email ? 'hidden' : 'show'}><span className={isEmail ? 'hidden' : 'null'}>Wrong email format!</span></div>

					<FormInput  
						name={'password'}
						password
						onChange={handlePasswordChange}
						type={showPassword ? 'text' : 'password' }
						label={'Password'} 
						placeholder={'Type your passsword here'} 
						required></FormInput>
					<CustomButton disabled={!validity}>Sign in</CustomButton>
				</form>
			</div>
		</div>
	)
};

export default SignIn;
