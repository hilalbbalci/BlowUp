import { combineReducers } from 'redux';


import users from './users_reducer';
import photos from './photos_reducer';
import comments from './comments_reducer';

const entities = combineReducers({
    photos,
    comments,
    users
});
export default entities;