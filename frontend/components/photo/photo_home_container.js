import React from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../../actions/photo_actions";
import { fetchUsers } from "../../actions/user_actions";
import PhotoHome from "./photo_home";

const mSTP = (state = {}) => {
    
    return {
        photos: Object.values(state.entities.photos),
        errors: state.sessionErrors,
        users: Object.values(state.entities.users)
    };
};

const mDTP = dispatch => ({
    fetchPhotos: () => dispatch(fetchPhotos()), 
    fetchUsers: () => dispatch(fetchUsers()) 
});

export default connect(mSTP, mDTP)(PhotoHome);