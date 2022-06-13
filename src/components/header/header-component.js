import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsHidden, selectUserFirstName } from '../../store/user/user.selectors';
import { toggleLogoutHidden, logoutUser } from '../../store/user/user.actions';

import { ReactComponent as ArrowDropdown } from '../../assets/down-arrow.svg';

import './header.styles.scss';

const Header = () => {

	const firstName = useSelector(selectUserFirstName);
	const isHidden = useSelector(selectIsHidden);



	let first_name = firstName.charAt(0).toUpperCase() + firstName.slice(1);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutCurrentUser = async () => {
		
	  (dispatch(logoutUser()));
		navigate('login');
	}


	return (
		<div className="header">
			<div className="description">Quicktel Notes</div>
			<div className="profile"> 
			  <div className="profile-name">Welcome, {`${first_name}`}
				<ArrowDropdown onClick={() => dispatch(toggleLogoutHidden())} className="profile-dropdown"/>
				</div>
				{isHidden 
					? null
					: ( 
							<div onClick={logoutCurrentUser} className='logout'>
								<h2>Logout</h2>
							</div>
				    )
				}
			</div>
		</div>
	)
};

export default Header;