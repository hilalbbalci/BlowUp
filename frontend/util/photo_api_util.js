export const fetchPhotos = () => (
    $.ajax({
        method: 'GET',
        url: 'api/photos',
    })
);

export const fetchPhoto = id => (
    $.ajax({
        method: 'GET',
        url: `api/photos/${id}`
    })
);

// export const createReview = comment => (
//     $.ajax({
//         method: 'POST',
//         url: 'api/comments',
//         data: { review }
//     })
// );

export const createPhoto = formData => {
    return(
    $.ajax({
        method: 'POST',
        url: 'api/photos',
        data: formData,
        // contentType: false,
        // processData: false
    }));
};

export const deletePhoto = photoId => (
    $.ajax({
        method: 'DELETE',
        url: `api/photos/${photoId}`,
    })
);


