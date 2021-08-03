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
// import PhotoShowContainer from './photo_show/photo_show_container';
// import PhotoFormContainer from './photo_form/photo_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>BlowUp</h1>
                <GreetingContainer />
            </Link>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={SessionForm} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;
