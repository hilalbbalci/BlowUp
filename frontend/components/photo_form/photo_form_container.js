import { connect } from "react-redux";
import { createPhoto } from "../../actions/photo_actions";
import UploadPhoto from "./photo_form";

const mSTP = (state = {}) => {
    // console.log(state);
    return ({
        photo: state.entities.photos,
        currentUser: state.session.id
       
    });
};

const mDTP = dispatch => {
    return {
        createPhoto: photo => dispatch(createPhoto(photo)),
    };
};

export default connect(mSTP, mDTP)(UploadPhoto);