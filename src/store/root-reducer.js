import { combineReducers } from "redux";

import formReducer from "./form/form.reducer";
import inputReducer from "./input/input.reducer";
import noteReducer from "./note/note.reducers";
import userReducer from "./user/user.reducer";


const rootReducers = combineReducers({
	form: formReducer,
	input: inputReducer,
	note: noteReducer,
	user: userReducer
});

export default rootReducers;