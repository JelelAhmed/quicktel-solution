import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createEventItem, toggleCreateEvent } from '../../store/event/event.actions';
import { selectInputBody, selectInputTitle } from '../../store/input/input.selectors';

import InputCard from '../input-card/input-card.component';


const CreateEvent = () => {
	const dispatch = useDispatch()

	const title = useSelector(selectInputTitle);
	const body = useSelector(selectInputBody);


	const handleEventCreate = () => {
		dispatch(createEventItem('/items', {
			name: title,
			description: body
		}))
  }
	
	return (
		<InputCard 
			mode={'create'}
			toggleCreateEvent={() => dispatch(toggleCreateEvent())}
			handleEventCreate={handleEventCreate}
		/>
	)
};

export default CreateEvent;

