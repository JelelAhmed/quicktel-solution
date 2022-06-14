import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { selectUserErrors } from '../../store/user/user.selectors';


import { ReactComponent as ErrorIcon } from '../../assets/error.svg'

import './feedback-card.styles.scss';


const FeedbackCard = () => {

	const errors = useSelector(selectUserErrors);



  const navigate = useNavigate();

	const refreshPage = () => {
		navigate(0)
	}

	return (
		<div className="feedback">
			{(errors.length
					? <ErrorIcon style={{fill: 'orange'}} className='feedback-image'/>
					: null
				  )
			}
			
			<p className="feedback-text">{`${errors[0].message}`}</p>
			<Link onClick={refreshPage} className="feedback-link" to={'/dashboard'}>Try Again</Link>
		</div>
	)
}

export default FeedbackCard;