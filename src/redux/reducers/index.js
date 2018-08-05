import { combineReducers } from "redux";
import userReducer from './userReducer';
import todoReducer from './todoReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    userReducer,
    todoReducer,
    form: formReducer
});

export default rootReducer;