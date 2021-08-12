export const fetchLike = likeId =>
    $.ajax({
        method: "GET",
        url: `/api/photos/${likeId}`,
    });

export const fetchLikes = () =>
    $.ajax({
        method: "GET",
        url: "/api/likes",
    });

export const createLike = (likerId, photoId) => {
    return $.ajax({
        method: "POST",
        url: "/api/likes",
        data: {
            like: {
                likerId,
                photoId,
            },
        },
    });
};

export const deleteLike = likeId =>
    $.ajax({
        method: "DELETE",
        url: `/api/likes/${likeId}`,
    });
``;