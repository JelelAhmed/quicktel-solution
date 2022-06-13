import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { print } from 'graphql';
import gql from 'graphql-tag';

import { getSavednotes } from '../../store/note/note.actions';
import { selectFetchedNotes, selectNoteAdd } from '../../store/note/note.selectors';

import NoteCard from '../note-card/note-card.component';

import './note-list.styles.scss';


///get thr recent 12 notes from thr database///////////
const count = 12;


const NoteList = () => {

	const noteAdd = useSelector(selectNoteAdd)

	const GET_NOTE = gql`
			query getNotes($limit: Int) {
				getNotes(limit: $limit, ) { 
					id,
					title,
					content,
					user{
						lastName
					}
				},
			}
    `

	const dispatch = useDispatch();
	const fetchedNotes = useSelector(selectFetchedNotes);
	
	useEffect(() => {
		const fetchUserNotes = async () => {
			 dispatch(getSavednotes('/graphql', {
				query: print(GET_NOTE),
				variables: {
					limit: count,
				},
			}))
		}

		fetchUserNotes();
	},[noteAdd]);


	return (
		<div className="notes">
		{fetchedNotes ? (
				fetchedNotes.map(({id, title, content, user}) => {
						return (
							<NoteCard
								key={id}
								title={title}
								body={content}
								id={id}
								author={user[0].lastName}
							/>
						);
					})
			)
			: <div>No note item to display. Click the button below to add notes</div> 
		}
		</div>
	)
};

export default NoteList;