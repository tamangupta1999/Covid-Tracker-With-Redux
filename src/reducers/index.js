import { combineReducers } from 'redux';
import HomeReducer from './home';
import HelpfulLinkReducer from './helpfulLink';

const rootReducer = combineReducers({
    home : HomeReducer,
    helpfulLink : HelpfulLinkReducer
})

export default rootReducer;