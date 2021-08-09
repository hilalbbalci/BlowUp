export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
);

export const fetchUserPhotos = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/photos`
    })
);