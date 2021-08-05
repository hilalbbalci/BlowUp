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
        <div className="photo-index-container">
            <PhotoIndexContainer />
        </div>
        
        <Switch>
            <AuthRoute exact path="/login" component={SessionForm} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/upload" component={PhotoFormContainer} />
            <AuthRoute exact path="/photos/:photoId" component={PhotoShowContainer} />
        </Switch>
    </div>
);

export default App;
