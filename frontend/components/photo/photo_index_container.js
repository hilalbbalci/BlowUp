import React from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../../actions/photo_actions";
import PhotoIndex from "./photo_index";

const mSTP = (state = {}) => {
    
    return {
        photos: Object.values(state.entities.photos),
        errors: state.sessionErrors
    };
};

const mDTP = dispatch => ({
    fetchPhotos: () => dispatch(fetchPhotos()),  
});

export default connect(mSTP, mDTP)(PhotoIndex);