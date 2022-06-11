import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { print } from 'graphql';
import gql from 'graphql-tag';


import { setCurrentUser } from "../../store/user/user.actions";
import { containsMinlength, containsNumber, containsSymbol, containsUppercase, emailValidation, formValidation, clearFormfields } from "../../store/form/form.actions";

import { ReactComponent as CircleIcon } from '../../assets/circle.svg';
import CustomButton from "../custom-button.component.js/custom-button.component";
import FormInput from "../form-input.js/form-input.component";

import { setInputEmail, setInputFirstName, setInputLastName, setInputPassword } from "../../store/form/form.actions";
import { selectEmail, selectFirstName, selectFormValidity, selectIsEmail, selectIsMinLength, selectIsNumber, selectIsSymbol, selectIsUppercase, selectLastName, selectPassword, selectShowPassword } from "../../store/form/form.selectors"

import  './sign-up.styles.scss';



const SignUp = () => {

const showPassword = useSelector(selectShowPassword);
const password = useSelector(selectPassword);
const email = useSelector(selectEmail);
const firstName = useSelector(selectFirstName);
const lastName = useSelector(selectLastName);
const validity = useSelector(selectFormValidity);
const isEmail = useSelector(selectIsEmail);
const isNumber = useSelector(selectIsNumber);
const isMinlength = useSelector(selectIsMinLength);
const isSymbol = useSelector(selectIsSymbol);
const isUppercase = useSelector(selectIsUppercase);


const formFields = {
	email,
	password,
	firstName,
	lastName
};


const	dispatch = useDispatch();
	
	useEffect(() => {

		const validateForm = () => {
			let validity = true;
	
			if(!firstName || !lastName || !email || !password) {
				validity = false;
			}
	
			if(email) {
				const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
				const isValid = pattern.test(email);
				dispatch(emailValidation(isValid));
				validity = isValid && validity;
			}
	
			if(password) {
				const isValid = password.length >= 8
				dispatch(containsMinlength(isValid));
			  validity = isValid && validity;
			}


			if(password) {
				const pattern = /(?=.*[A-Z])/;
				const isValid =  pattern.test(password) 
				dispatch(containsUppercase(isValid));
				validity = isValid && validity;
			}

			if(password) {
				const pattern = /(?=.*[0-9])/;
				const isValid =  pattern.test(password) 
				dispatch(containsNumber(isValid));
				validity = isValid && validity;
			}

			if(password) {
				const pattern = /(?=.*[!@#$%^&*])/;
				const isValid =  pattern.test(password) 
				dispatch(containsSymbol(isValid));
				validity = isValid && validity;
			}
	
			return validity;
		}

		dispatch(formValidation(validateForm({...formFields})));

	}, [password, email, firstName, lastName])



	const	handleSignUp = async (event) => {
		event.preventDefault();

		const ADD_SKILL = gql`
			mutation createUser($firstName: String! $lastName:String!, $email:String!, $password:String!) {
			createUser(firstName:$firstName, lastName:$lastName, email:$email, password:$password) { 
				id,
				firstName,
				lastName
			}
	  }
  `
		  dispatch(setCurrentUser('/graphql', {
				query: print(ADD_SKILL),
				variables: {
					firstName: firstName,
					lastName: lastName,
					email: email,
					password: password,
				},
			}))
		}
	
	const	handlePasswordChange = (event) => {
		dispatch(setInputPassword(event.target.value))
	}

	const	handleEmailChange = (event) => {
		dispatch(setInputEmail(event.target.value))
	}

	const	handleFirsNameChange = (event) => {
		dispatch(setInputFirstName(event.target.value))
	}

	const	handleLastNameChange = (event) => {
		dispatch(setInputLastName(event.target.value))
	}


	return (
		<div className="signup">
			<div className="signup-wrapper">
			  <h2 className="signup-title">Create an Account</h2>
				<span className="signup-message">Already have an account? <Link onClick={() =>dispatch(clearFormfields())} to={'/login'}>Log in</Link></span>

				<form onSubmit={handleSignUp} className="signup-form">
					<div className="name-grid">
						<FormInput 
							label={'First Name'} 
							onChange={handleFirsNameChange}
							type={'text'} 
							placeholder={'Type here'} 
							required />

						<FormInput 
							label={'Last Name'} 
							onChange={handleLastNameChange}
							type={'text'} 
							placeholder={'Type here'} 
							required />
					</div>
				
					<FormInput 
						onChange={handleEmailChange}
						label={'Email'} 
						type={'email'} 
						placeholder={'Type your email address here'} 
						required
					/>
					<div className={!email ? 'hidden' : 'show'}><span className={isEmail ? 'hidden' : 'null'}>Wrong email format!</span></div>							
					
					<FormInput 
						password
						label={'Password'} 
						type={showPassword ? 'text' : 'password' } 
						placeholder={'Type your passsword here'} 
						onChange={handlePasswordChange}
						required	
					/>
					<div className={!password ? 'hidden' : "password-rules"} >
						<div className={isUppercase ? 'passed' : 'null'}>
							<CircleIcon className="icon"/>
								Contains at least one uppercase letter
						</div>
						<div className={isMinlength ? 'passed' : 'null'}>
							<CircleIcon className="icon"/>
								Contains eight characters
						</div>
						<div className={isNumber ? 'passed' : 'null'}>
							<CircleIcon className="icon"/>
								Contains at least one number
						</div>
						<div className={isSymbol ? 'passed' : 'null'}>
							<CircleIcon className="icon"/>
								Contains at least one symbol
						</div>
					</div>
					<div className='signup-button'>
						<CustomButton  disabled={!validity}>Sign Up</CustomButton>
					</div>
				</form>
			</div>
		</div>
	)
};

export default SignUp;