import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectShowPassword } from '../../store/form/form.selectors';
import { setInputType } from '../../store/form/form.actions';

import {ReactComponent as EyeClose} from '../../assets/eye-blocked.svg';
import {ReactComponent as EyeOpen} from '../../assets/eye.svg';



import './form-input.styles.scss';

const FormInput = ({ setPasswordShown, handleChange, password, label, ...otherProps }) => {

	const dispatch = useDispatch();
	const showPassword = useSelector(selectShowPassword);
	
	const togglePassword = () => {
		dispatch(setInputType(!showPassword));
	}

	return (
		<div className='form-group'>
			{
				label ?
					(<label className="form-label">
						{label}
					</label>)
				: null
			}
			<input  
				onChange={handleChange}
				className='form-input' {...otherProps}
			/>
			{ password ? 
				(showPassword ? 
					<EyeClose onClick={() => togglePassword()} className='eye' />
					: <EyeOpen onClick={() => togglePassword()} className='eye' />
				)
			: null
			}
			
		</div>
	);
}


export default FormInput;