import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

// import GreetingContainer from './greeting/greeting_container';
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
// import SearchContainer from './search/search_container';
// import PhotoShowContainer from './photo_show/photo_show_container';
// import PhotoFormContainer from './photo_form/photo_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>BlowUp</h1>
            </Link>
        </header>
    </div>
);

export default App;
