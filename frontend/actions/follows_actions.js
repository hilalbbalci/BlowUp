import * as followAPI from '../util/follow_api_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
// export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

// export const receiveCommentErrors = (errors) => ({
//     type: RECEIVE_COMMENT_ERRORS,
//     errors,
// });


export const receiveFollows = (follows) => ({
    type: RECEIVE_FOLLOWS,
    follows
});



export const removeFollow = (followId) => ({
    type: REMOVE_FOLLOW,
    followId
});
export const receiveFollow = (follow) => ({
    type: RECEIVE_FOLLOW,
    follow
});
export const fetchFollows = (userId) => dispatch => (
    followAPI.fetchFollows(userId)
        .then(follows => {
            dispatch(receiveFollows(follows));
        })
);
// export const fetchComment = (commentId) => dispatch => (
//     commentAPI.fetchComment(commentId)
//         .then(comment => {
//             dispatch(receiveComments(comment));
//         })
// );

export const createFollow = (follow) => dispatch => (
    followAPI.createFollow(follow)
        .then(follow => dispatch(receiveFollow(follow)))
        // .fail(err => dispatch(receiveCommentErrors(err.responseJSON)))
);



export const deleteFollow = followId => dispatch => (
    followAPI.deleteFollow(followId).then(() => dispatch(removeFollow(followId)))
);
