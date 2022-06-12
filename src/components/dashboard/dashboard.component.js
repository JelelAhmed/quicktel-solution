import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleCreateEvent } from '../../store/event/event.actions';
import { ReactComponent as AddIcon } from '../../assets/plus-alt.svg'; 
import Spinner from 'react-spinkit';

// import { selectUserError, selectUserSuccess, selectVerified, selectVerifyToken } from '../../redux/user/user.selectors';
import { selectIsAdd, selectIsCreate, selectIsDelete, selectIsError, selectIsPending, selectIsSuccess, selectIsUpdate } from '../../store/event/event.selectors';


// import EventList from '../event-list/event-list.component';
import Header from '../header/header-component';
import AddNote from '../add-note/add-note.component';
import PopupContainer from '../popup-container/popup-container.component';
import FeedbackCard from '../feedback-card/feedback-card.component';

import './dashboard.styles.scss';


const Dashboard = () => {

	const dispatch = useDispatch();

	// const userSuccess = useSelector(selectUserSuccess);
	// const userError = useSelector(selectUserError);
	// const verified = useSelector(selectVerified);
	const isAdd = useSelector(selectIsAdd);
	const isDelete = useSelector(selectIsDelete);
	const isUpdate = useSelector(selectIsUpdate);
	const isPending = useSelector(selectIsPending);
	const isSuccess = useSelector(selectIsSuccess);
	const isError = useSelector(selectIsError);


	return (
		<div className="dashboard">
			<div className="dashboard-header">
				<Header />
			</div>
			{/* <div className="dashboard-events">
				<EventList />
			</div> */}
			<div className="dashboard-create">
				<AddIcon onClick={() => dispatch(toggleCreateEvent())}/>
			</div>
			{isAdd ?	
				<PopupContainer ><AddNote /></PopupContainer>
			 : null
			}

			{/* {isError || userError ?
				<PopupContainer><FeedbackCard /></PopupContainer>
				: null
			}  
			{isSuccess || userSuccess ?
				<PopupContainer><FeedbackCard /></PopupContainer>
				: null
			} */}
			{isPending ?
				<Spinner name='circle' className='spinner' fadeIn='none' />
				: null
			}
		</div>
	)
};


export default Dashboard;