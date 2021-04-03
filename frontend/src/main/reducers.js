import { combineReducers } from 'redux';
import todoDescrition from '../reducers/changeDescriptionReducer';

const rootReducer = combineReducers({
  todo: todoDescrition
});

export default rootReducer;