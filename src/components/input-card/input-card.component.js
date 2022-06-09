import React from "react";
import { useDispatch } from "react-redux";

import { setInputTitle, setInputBody } from "../../store/input/input.actions";
import FormInput from '../../components/form-input.js/form-input.component';

import './input-card.styles.scss';

const InputCard = ({ 
	toggleCreateEvent, 
	handleEventCreate, 
	toggleUpdateEvent,
	handleEventUpdate, 
	mode,  
	name,
	description
}) =>  {

	const dispatch = useDispatch();


	const	inputTitleChange = (event) => {
		dispatch(setInputTitle(event.target.value))
	}

	const	inputBodyChange = (event) => {
		dispatch(setInputBody(event.target.value))
	}

	return (
		<div >
			{mode === 'create' 
			?	(		
					<div className='item'>
						<div className="item-title">Create Item</div>
						<div className="item-detail">
							<div className="item-input">
								<FormInput placeholder={'Input item name here'} onChange={inputTitleChange} label={'Name'} />
							</div>

							<div className="item-body">
								<label className="item-tag">Add Note</label>
								<textarea placeholder="Type here" onChange={inputBodyChange} className="item-note"></textarea>
							</div>
							<div className="item-buttons">
								<button onClick={toggleCreateEvent} className="button inverted">Cancel</button>
								<button onClick={handleEventCreate} className="button">Create Event</button>
							</div>
						</div>
					</div>
				)
			: (
					<div className='item'>
						<div className="item-title">Update Item</div>
							<div className="item-detail">
								<div className="item-input">
									<FormInput 
										placeholder={'Input item name here'} 
										onChange={inputTitleChange} 
										label={'Name'}
										defaultValue={name}
									/>		
								</div>

								<div className="item-body">
									<label className="item-tag">Add Note</label>
									<textarea 
										placeholder="Type here" 
										onChange={inputBodyChange} 
										defaultValue={description} 
										className="item-note">
									</textarea>
								</div>
								<div className="item-buttons">
									<button onClick={toggleUpdateEvent} className="button inverted">Cancel</button>
									<button onClick={handleEventUpdate} className="button">Update Event</button>
							</div>
						</div>
					</div>
				)
		  }  
		</div>
  )
}


export default InputCard;