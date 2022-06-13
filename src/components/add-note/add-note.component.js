import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { print } from 'graphql';
import gql from 'graphql-tag';

import { addNoteItem, toggleCreateEvent } from '../../store/note/note.actions';

import { selectInputBody, selectInputTitle } from '../../store/input/input.selectors';

import InputCard from '../input-card/input-card.component';
import { selectUserId } from '../../store/user/user.selectors';


const AddNote = () => {
	const dispatch = useDispatch()

	const userId = useSelector(selectUserId);
	const title = useSelector(selectInputTitle);
	const content = useSelector(selectInputBody);

	console.log(userId);


	const handleAddNote = () => {

		const ADD_NOTE = gql`
			mutation addNote($userId: Int! $title:String!, $content:String!) {
				addNote(userId:$userId, title:$title,  content:$content) { 
					id,
					title,
					content
				}
			}
    `
		  dispatch(addNoteItem('/graphql', {
				query: print(ADD_NOTE),
				variables: {
					userId: userId,
					title: title,
					content: content
				},
			}))
    }
	


	return (
		<InputCard 
			mode={'create'}
			toggleCreateEvent={() => dispatch(toggleCreateEvent())}
			handleAddNote={handleAddNote}
		/>
	)
};

export default AddNote;

