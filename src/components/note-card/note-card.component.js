import React from "react";

import './note-card.styles.scss';

const NoteCard = ({ title, body, author }) => {
	

	return (
		<div className="card">
			<div className="note">
				<div className="note-headline">
					<p className="note-tag">Title</p>
					<p className="note-name">{title}</p>
				</div>

				<div className="note-body">
					<p className="note-tag">Content</p>
					<p className="note-content">
						{body}
					</p>
				</div>
				<div className="note-author">
					Author:  {author}
				</div>	
			</div>
		</div>
	)
};

export default NoteCard;