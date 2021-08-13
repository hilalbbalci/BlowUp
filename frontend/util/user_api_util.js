export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
);
export const fetchUsers = ()=> (
    $.ajax({
        method: 'GET',
        url: `/api/users`
    })
);
export const updateUser = (user) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data: {user}
    })
);


export const fetchUserPhotos = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/photos`
    })
);