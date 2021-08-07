import { combineReducers } from 'redux';


import users from './users_reducer';
import photos from './photos_reducer';
import comments from './comments_reducer';

const entities = combineReducers({
    users,
    photos,
    comments
});
export default entities;