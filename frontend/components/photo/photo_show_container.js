import React from "react";
import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photo_actions";
import PhotoShow from "./photo_show";


const mSTP = (state, ownProps) => {
   

    return {
        photo: state.entities.photos[ownProps.match.params.photoId],
        session: state.session.currentUser,
    };
};

const mDTP = dispatch => {
    return {
        fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
       
    };
};

export default connect(mSTP, mDTP)(PhotoShow);