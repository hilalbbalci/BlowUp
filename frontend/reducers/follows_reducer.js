import {
    RECEIVE_FOLLOW,
    RECEIVE_FOLLOWS,
    REMOVE_FOLLOW,
} from "../actions/follows_actions";

const followsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_FOLLOW:
            newState[action.follow.id] = action.follow;
            return newState;
        case RECEIVE_FOLLOWS:
            return Object.assign(newState, action.follows);
        case REMOVE_FOLLOW:
            delete newState[action.followId];
            return newState;
        default:
            return state;
    }
};

export default followsReducer;