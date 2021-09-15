import React from "react";
import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photo_actions";
import { fetchUsers } from "../../actions/user_actions";
import PhotoShow from "./photo_show";
// import photoUserSelector from '../../selectors/photo_user_selector';
// import { fetchlikes, createLike, deletelike } from "../../actions/like_actions";


const mSTP = (state, ownProps) => {
   const photo = state.entities.photos[ownProps.match.params.id];
    return {
        photo: photo,
        session: state.session.currentUser,
        // user: state.entities.users[photo.userId],
        // likes: Object.values(state.entities.likes),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        user: state.entities.users[ownProps.match.params.userId],
        // users :state.entities.users,
        // user: photoUserSelector(state, ownProps.match.params.id),

    };
};

const mDTP = dispatch => {
    return {
        fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
        fetchUsers: () => dispatch(fetchUsers()),
        updateUser: user => dispatch(updateUser(user)),
        // fetchlikes: () => dispatch(fetchlikes()),
        // createLike: (likerId, photoId) => dispatch(createLike(likerId, photoId)),
        // deleteLike: likeId => dispatch(deleteLike(likeId))
    };
};

export default connect(mSTP, mDTP)(PhotoShow);