import React from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../../actions/photo_actions";
import { fetchUsers } from "../../actions/user_actions";
import PhotoIndex from "./photo_index";

const mSTP = (state = {}) => {
    
    return {
        photos: Object.values(state.entities.photos),
        errors: state.sessionErrors,
        users: Object.values(state.entities.users),
        currentUser: state.entities.users[state.session.id],
    };
};

const mDTP = dispatch => ({
    fetchPhotos: () => dispatch(fetchPhotos()), 
    fetchUsers: () => dispatch(fetchUsers()),
    updateUser: user => dispatch(updateUser(user)),

});

export default connect(mSTP, mDTP)(PhotoIndex);