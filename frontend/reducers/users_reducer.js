import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
// import { RECEIVE_COMMENTS } from '../actions/comment_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });        
        // case RECEIVE_COMMENTS:
        //     return { ...state, ...action.users }
        default:
            return state;
    }
}

export default usersReducer;
