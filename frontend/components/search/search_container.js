import Search from "./search";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user_actions";

const mSTP = (state = {}) => {

    return {
        users: Object.values(state.entities.users),
        currentUser: state.entities.users[state.session.id],
    };
};

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),

});

export default connect(mSTP, mDTP)(Search);