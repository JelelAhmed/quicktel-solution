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

export const selectIsUpdate = createSelector(
	[selectEvent],
	(event) => event.isUpdate
);

export const selectIsDelete = createSelector(
	[selectEvent],
	(event) => event.isDelete
);

export const selectIsPending = createSelector(
	[selectEvent],
	(event) => event.isPending
);

export const selectIsError = createSelector(
	[selectEvent],
	(event) => event.isError
);

export const selectIsSuccess = createSelector(
	[selectEvent],
	(event) => event.isSuccess
);

export const selectEventToDelete = createSelector(
	[selectEvent],
	(event) => event.eventToDelete
);

export const selectFetchedNotes = createSelector(
	[selectEvent],
	(event) => event.notes
);

export const selectFeedback = createSelector(
	[selectEvent],
	(event) => event.feedbackMessage
);

export const selectEventToUpdate = createSelector(
	[selectEvent],
	(event) => event.eventToUpdate
);



