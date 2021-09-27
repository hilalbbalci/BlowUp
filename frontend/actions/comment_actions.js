import * as commentAPI from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveCommentErrors = (errors) => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors,
});


export const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments,
});

export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment,
});

export const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
});

export const fetchComments = (photoId) => dispatch => (
    commentAPI.fetchComments(photoId)
        .then(comments => {
            dispatch(receiveComments(comments));
        })
);
export const fetchComment = (commentId) => dispatch => (
    commentAPI.fetchComment(commentId)
        .then(comment => {
            dispatch(receiveComments(comment));
        })
);

export const createComment = (comment) => dispatch => (
    commentAPI.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
        .fail(err => dispatch(receiveCommentErrors(err.responseJSON)))
);
export const updateComment = (comment) => dispatch => (
    commentAPI.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
        .fail(err => dispatch(receiveCommentErrors(err.responseJSON)))
);



export const deleteComment = commentId => dispatch => (
    commentAPI.deleteComment(commentId).then(() => dispatch(removeComment(commentId)))
);
