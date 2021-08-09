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
import Home from './home/home';
import Entry from './entry/entry';
// import WhatMakesUsDifferent from './what_makes_different/what_makes_us_different';

const App = () => (
   
    <div>
        <header className="header">
            <div className="header-links">
                <Link to="/" className="header-link-blow">Blow</Link>
                <Link to="/" className="header-link-up">Up</Link>
            </div>
            <div>
            </div>
            <input type="text" placeholder="Search.." />
            <GreetingContainer />

        </header>
        <div>
                <AuthRoute exact path='/' component={Entry} />
                <ProtectedRoute exact path='/' component={Home}/>   
        </div>
        <div>
            {/* <AuthRoute exact path='/' component={WhatMakesUsDifferent} /> */}
            <ProtectedRoute exact path='/' component={PhotoIndexContainer} />

        </div>
        <div>
            <AuthRoute exact path="/login" component={SessionForm} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/upload" component={PhotoFormContainer} />
            <ProtectedRoute exact path="/photos/:id" component={PhotoShowContainer} />

        </div>
        
        


    </div>
);

export default App;
