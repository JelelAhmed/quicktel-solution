import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleCreateEvent } from '../../store/note/note.actions';
import { ReactComponent as AddIcon } from '../../assets/plus-alt.svg'; 
import Spinner from 'react-spinkit';

import { selectIsAdd, selectIsPending, } from '../../store/note/note.selectors';


import Header from '../header/header-component';
import NoteList from '../note-list/note-list.component';
import AddNote from '../add-note/add-note.component';
import PopupContainer from '../popup-container/popup-container.component';

import './dashboard.styles.scss';


const Dashboard = () => {

	const dispatch = useDispatch();
	const isAdd = useSelector(selectIsAdd);
	const isPending = useSelector(selectIsPending);



	return (
		<div className="dashboard">
			<div className="dashboard-header">
				<Header />
			</div>
			<div className="dashboard-events">
				<NoteList />
			</div>
			<div className="dashboard-create">
				<AddIcon onClick={() => dispatch(toggleCreateEvent())}/>
			</div>
			{isAdd ?	
				<PopupContainer ><AddNote /></PopupContainer>
			 : null
			}

			{isPending ?
				<Spinner name='circle' className='spinner' fadeIn='none' />
				: null
			}
		</div>
	)
};


export default Dashboard;