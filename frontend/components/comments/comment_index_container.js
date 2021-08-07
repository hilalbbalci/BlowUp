import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import CommentIndex from "./comment_index";
import { deleteComment, fetchComments } from "../../actions/comment_actions";

const mapStateToProps = (state) => ({
    comments: Object.values(state.entities.comments),
    users: state.entities.users,
    currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchComments: () =>
        dispatch(fetchComments(ownProps.match.params.photoId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));