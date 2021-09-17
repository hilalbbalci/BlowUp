import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserProfile from "./user_profile";
import { fetchUser, updateUser, fetchUsers } from '../../actions/user_actions';
import { fetchPhotos } from "../../actions/photo_actions";
// import { createFollow } from '../../actions/follows_actions';

const mSTP = (state = {}, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.userId],
    photos: Object.values(state.entities.photos),
    // follows: Object.values(state.entities.follows)
    // demoUser: Object.values(state.entities.users)[0]
});


const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: ()=> dispatch(fetchUser()),
    fetchPhotos: ()=> dispatch(fetchPhotos())
  
    // createFollow: follow => dispatch(createFollow(follow)),
    // deleteFollow: followId => dispatch(deleteFollow(followId)),
});




export default withRouter(connect(mSTP, mDTP)(UserProfile));