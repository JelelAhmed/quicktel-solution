import { createSelector } from "reselect";

const selectEvent = state => state.note;

export const selectIsAdd = createSelector(
	[selectEvent],
	(event) => event.isAdd
);

export const selectNoteAdd = createSelector(
	[selectEvent],
	(event) => event.noteAdd
);

export const selectIsPending = createSelector(
	[selectEvent],
	(event) => event.isPending
);

export const selectFetchedNotes = createSelector(
	[selectEvent],
	(event) => event.notes
);

export const selectAddIsPending = createSelector(
	[selectEvent],
	(event) => event.addIsPending
);






