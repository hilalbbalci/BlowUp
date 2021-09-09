export const fetchFollows = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/follows`
    })
);



export const createFollow = (follow) => (
    $.ajax({
        method: 'POST',
        url: '/api/follows',
        data: {follow}
    })
);



export const deleteFollow = followId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/follows/${followId}`
    })
);