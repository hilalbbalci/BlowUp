import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});

export const receivePhoto = (photo) => ({
    type: RECEIVE_PHOTO,
    photo
});
export const removePhoto = (photoId) => ({
    type: REMOVE_PHOTO,
    photoId
});


export const fetchPhotos = () => dispatch => (
    APIUtil.fetchPhotos().then(photos => (
        dispatch(receivePhotos(photos))
    ))
);

export const fetchPhoto = id => dispatch => (
    APIUtil.fetchPhoto(id).then(payload => (
        dispatch(receivePhoto(payload))
    ))
);

export const createPhoto = photo => dispatch => (
    APIUtil.createPhoto(photo).then(photo => (
        dispatch(receivePhoto(photo))
    ))
);
export const deletePhoto = photoId => dispatch => (
    APIUtil.deletePhoto(photoId).then(() => (
        dispatch(removePhoto(photoId))
    ))
);
