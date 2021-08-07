export const fetchComments = (photoId) => (
    $.ajax({
        method: 'GET',
        url: `/api/photos/${photoId}/comments`
    })
);

export const fetchComment = (commentId) => (
    $.ajax({
        method: "GET",
        url: `/api/comments/${commentId}`
    })
);

export const createComment = (comment) => (
    $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: comment
    })
);



export const deleteComment = commentId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    })
);