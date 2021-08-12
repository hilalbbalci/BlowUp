export const photoUserSelector = (state, photoId) => {
    const photo = state.entities.photos[photoId]
    if (photo === undefined) {
        return { username: '' };
    }
    return state.entities.users[photo.userId];
};