import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {fetchComments} from './actions/comment_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.store = store;
    window.fetchComments = fetchComments;
    

    ReactDOM.render(<Root store={store} />, root);
});