import {
    REMOVE_PHOTO,
    RECEIVE_PHOTOS,
    RECEIVE_PHOTO
} from '../actions/photo_actions';

const photosReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return Object.assign(newState, action.photos);
        case RECEIVE_PHOTO:
            newState[action.photo.id] = action.photo;
            return newState;
        case REMOVE_PHOTO:
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default photosReducer;
