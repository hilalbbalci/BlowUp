import { combineReducers } from 'redux';


import users from './users_reducer';
import photos from './photos_reducer';
import comments from './comments_reducer';
import follows from './follows_reducer';

const entities = combineReducers({
    photos,
    comments,
    users,
    follows
    
});
export default entities;