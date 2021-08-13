import { connect } from "react-redux";
import ProfilePhotoUpload from "./profile_photo_upload";
import { updateUser } from '../../actions/user_actions';

const mSTP = (state = {}) => {
    // console.log(state);
    return ({
        userId: state.session.id,
    });
};
const mDTP = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user)),
    };
};



export default connect(mSTP, mDTP)(ProfilePhotoUpload);