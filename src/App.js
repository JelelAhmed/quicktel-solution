
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthComponent from './utils/AuthComponent';

import Home from './routes/home/home';
import LogIn from './routes/login/login';
import Register from './routes/register/register';

import './App.styles.scss';
import { selectIsLoggedIn } from './store/user/user.selectors';





const  App = () => {

	const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

useEffect(() => {
	if(isLoggedIn) {
		navigate('/');
	}
}, [isLoggedIn])

	return (
		<div className="app">
			<Routes>
				<Route path='/login' element={<LogIn />} />
				<Route path='/register' element={<Register />} />
				<Route path='/' element={<AuthComponent><Home /></AuthComponent>} />
			</Routes>
		</div>
	);
}

export default App;
