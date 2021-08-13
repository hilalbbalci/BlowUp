import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {fetchComments} from './actions/comment_actions'
import {updateUser, fetchUsers} from './actions/user_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
   window.updateUser = updateUser;
   window.fetchUsers = fetchUsers;
    window.store = store;
   
    

    ReactDOM.render(<Root store={store} />, root);
});