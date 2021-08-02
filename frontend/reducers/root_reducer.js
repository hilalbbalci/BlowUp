import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session';
import sessionErrors from './session_errors';


const rootReducer = combineReducers({
    entities,
    session,
    sessionErrors,
});

export default rootReducer;