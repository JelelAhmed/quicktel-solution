import './App.styles.scss';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home';
import LogIn from './routes/login/login';
import Register from './routes/register/register';

import React from 'react';

const  App = () => {
	return (
		<div className="app">
			<Routes>
				<Route index element={<Home />} />
				<Route path='/login' element={<LogIn />} />
				<Route path='/register' element={<Register />} />
				{/* <Route path='/home' element={<AuthComponent><Home /></AuthComponent>} /> */}
			</Routes>
		</div>
	);
}

export default App;
