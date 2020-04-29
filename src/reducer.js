import { combineReducers } from 'redux';
import crossComponentReducer from './utils/crossComponent/crossComponentReducer';
// import your reducers here


// assign your reducers here
const reducer = combineReducers({
  cross: crossComponentReducer,
});

export default reducer;
