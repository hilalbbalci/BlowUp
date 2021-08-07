import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (ownProps) => {
    return {
        formType: "createComment",
        preloadedState: {
            comment: "",
            showButtons: false,
            // photoId: ownProps.match.params.photoId,
        },
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: (comment) => dispatch(createComment(comment))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));