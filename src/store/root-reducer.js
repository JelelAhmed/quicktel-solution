import { combineReducers } from "redux";

import formReducer from "./form/form.reducer";
import inputReducer from "./input/input.reducer";
// import eventReducer from "./event/event.reducers";
// import userReducer from "./user/user.reducer";


const rootReducers = combineReducers({
	form: formReducer,
	input: inputReducer
});

export default rootReducers;