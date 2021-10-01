import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment, fetchComments, deleteComment, updateComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    photoId: ownProps.match.params.id,
    comments: Object.values(state.entities.comments),
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
    preloadedState: {
        comment: {
            comment: "",
            photoId: 0,
        },
        showButtons: false,


    }

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchComments: () =>
        dispatch(fetchComments(ownProps.match.params.photoId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    createComment: (comment) => dispatch(createComment(comment))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));