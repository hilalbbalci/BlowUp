import React from "react";
import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photo_actions";
import PhotoShow from "./photo_show";


const mSTP = (state, ownProps) => {
   

    return {
        photo: state.entities.photos[ownProps.match.params.id],
        session: state.session.currentUser,
        users: state.entities.users
    };
};

const mDTP = dispatch => {
    return {
        fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
       
    };
};

export default connect(mSTP, mDTP)(PhotoShow);