import { connect } from "react-redux";
import ProfilePhotoUpload from "./profile_photo_upload";
import { fetchUser, updateUser } from '../../actions/user_actions';

const mSTP = (state = {}) => ({
    currentUser: state.entities.users[state.session.id],
    // demoUser: Object.values(state.entities.users)[0]
});
    
   
const mDTP = dispatch => ({
        updateUser: user => dispatch(updateUser(user)),
        fetchUser: userId => dispatch(fetchUser(userId))
    });




export default connect(mSTP, mDTP)(ProfilePhotoUpload);