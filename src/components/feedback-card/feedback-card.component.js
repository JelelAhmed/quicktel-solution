import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { selectUserError, selectUserFeedback, selectUserSuccess, selectVerifyMessage } from '../../store/user/user.selectors';
import { selectFeedback, selectIsError, selectIsSuccess } from '../../store/event/event.selectors';

import { ReactComponent as SuccessIcon } from '../../assets/checkmark.svg'
import { ReactComponent as ErrorIcon } from '../../assets/error.svg'

import './feedback-card.styles.scss';


const FeedbackCard = () => {

	const userSuccess = useSelector(selectUserSuccess);
	const userError = useSelector(selectUserError);
	const userFeedback = useSelector(selectUserFeedback);
	const isSuccess = useSelector(selectIsSuccess);
	const isError = useSelector(selectIsError);

	let verifyMessage = useSelector(selectVerifyMessage);
	let feedback = useSelector(selectFeedback);

	if (feedback === undefined) feedback = 'Deleted Successfully';
	if (verifyMessage === 'user verified successfully') verifyMessage = "Your email address has been verified."

  const navigate = useNavigate();

	const refreshPage = () => {
		navigate(0)
	}

	return (
		<div className="feedback">
			{isSuccess || userSuccess
				? <SuccessIcon className="feedback-image" />
				: (isError || userError
					? <ErrorIcon style={{fill: 'orange'}} className='feedback-image'/>
					: null
				  )
			}
				
			<p className="feedback-text">{`${userFeedback} ${feedback} ${verifyMessage}`}</p>
			<Link onClick={refreshPage} className="feedback-link" to={'/dashboard'}>Go to Dashboard</Link>
		</div>
	)
}

export default FeedbackCard;