import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserProfile from "./user_profile";
import { fetchUser, updateUser } from '../../actions/user_actions';

const mSTP = (state = {}) => ({
    currentUser: state.entities.users[state.session.id],
    // demoUser: Object.values(state.entities.users)[0]
});


const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    fetchUser: userId => dispatch(fetchUser(userId))
});




export default withRouter(connect(mSTP, mDTP)(UserProfile));