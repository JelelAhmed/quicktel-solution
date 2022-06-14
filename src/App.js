
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Routes, Route, useNavigate } from 'react-router-dom';
import Spinner from 'react-spinkit';


import AuthComponent from './utils/AuthComponent';
import PopupContainer from './components/popup-container/popup-container.component';


import Home from './routes/home/home';
import LogIn from './routes/login/login';
import Register from './routes/register/register';

import './App.styles.scss';
import { selectUserErrors, selectUserId, selectUserPending } from './store/user/user.selectors';
import FeedbackCard from './components/feedback-card/feedback-card.component';






const  App = () => {

	const navigate = useNavigate();
	const user = useSelector(selectUserId);
	const isPending = useSelector(selectUserPending);
	const errors = useSelector(selectUserErrors);

	let userId = null;

	if(user) {
		userId = user.id 
	}

useEffect(() => {
	if(userId) {
		navigate('/');
	}
}, [userId])

	return (
		<div className="app">
			{isPending ?
				<Spinner name='circle' className='spinner' fadeIn='none' />
				: null
				}
			{errors ?
				<PopupContainer ><FeedbackCard /></PopupContainer>
				: null
			}
			<Routes>
				<Route path='/login' element={<LogIn />} />
				<Route path='/register' element={<Register />} />
				<Route path='/' element={<AuthComponent><Home /></AuthComponent>} />
			</Routes>
		</div>
	);
}

export default App;
