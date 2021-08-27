import { connect } from "react-redux";
import ProfilePhotoUpload from "./profile_photo_upload";
import { fetchUser, updateUser } from '../../actions/user_actions';

const mSTP = (state) => {
    // console.log(state);
    return ({
        currentUser: Object.values(state.entities.users)[state.session.id]
        
    });
};
const mDTP = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user)),
        fetchUser: userId => dispatch(fetchUser(userId))
    };
};



export default connect(mSTP, mDTP)(ProfilePhotoUpload);