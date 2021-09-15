import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SessionForm from './session_form/session_form';

// import SearchContainer from './search/search_container';
import PhotoShowContainer from './photo/photo_show_container';
import PhotoFormContainer from './photo_form/photo_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PhotoIndexContainer from './photo/photo_index_container';
import CommentIndexContainer from './comments/comment_index_container';
import Search from './search/search_container';
import Home from './home/home';
import Entry from './entry/entry';
import Upload from './upload/upload';
import ProfilePhotoUpload from './profile/profile_photo_upload_container';
import UserProfile from './profile/user_profile_container';
import PhotoHomeContainer from './photo/photo_home_container';
import { RiSearchLine } from "react-icons/ri";
// import WhatMakesUsDifferent from './what_makes_different/what_makes_us_different';

const App = () => (
   
    <div>
        <header className="header">
            <div className="header-links">
                <Link to="/" className="header-link-blow">Blow</Link>
                <Link to="/" className="header-link-up">Up</Link>
            </div>
           
            <div className="greeting-component">
                <Search /> 
                <GreetingContainer />        
            </div>
            

        </header>
        <div>
                <AuthRoute exact path='/' component={Entry} />
                <ProtectedRoute exact path='/' component={Home}/> 
                <ProtectedRoute exact path="/upload" component={Upload} />

        </div>
        <div>
            <AuthRoute exact path='/' component={PhotoHomeContainer} />

            <ProtectedRoute exact path='/' component={PhotoIndexContainer} />
        </div>
        <div>
            <AuthRoute exact path="/login" component={SessionForm} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/upload" component={PhotoFormContainer} />
            <ProtectedRoute exact path="/photos/:id" component={PhotoShowContainer} />
            <ProtectedRoute exact path="/users/:userId" component={UserProfile} />
            <ProtectedRoute exact path="/profilephoto" component={ProfilePhotoUpload} />

        </div>
        <footer>
            <div id="aboutMe">
                <p>©Developed by Hilal Biten Balci Bebek</p>
            </div>
            <div id="sources">
                <Link target="_blank" href="https://github.com/hilalbbalci">
                    <img id="github" src="https://blowup-dev.s3.us-west-1.amazonaws.com/GitHub-Mark-32px.png"/>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/hilal-balci-bebek-546b001b6/">
                    <img id="linkedin" src="https://blowup-dev.s3.us-west-1.amazonaws.com/LI-In-Bug.png"/>
                </Link>
            </div>    
        </footer>
    </div>
);

export default App;
