import React from "react";
import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photo_actions";
import { fetchUser } from "../../actions/user_actions";
import PhotoShow from "./photo_show";
import { photoUserSelector } from '../../selectors/photo_user_selector';



const mSTP = (state, ownProps) => {
   

    return {
        photo: state.entities.photos[ownProps.match.params.id],
        session: state.session.currentUser,
        user: photoUserSelector(state, ownProps.match.params.id),
    };
};

const mDTP = dispatch => {
    return {
        fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
        fetchUser: userId => dispatch(fetchUser(userId))   
    };
};

export default connect(mSTP, mDTP)(PhotoShow);